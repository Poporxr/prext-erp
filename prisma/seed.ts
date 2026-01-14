import { PrismaClient, Gender, StudentStatus, UserStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  /**
   * ACADEMIC YEARS
   */
  const year2023 = await prisma.academicYear.create({
    data: {
      name: "2023/2024",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-07-30"),
      isActive: false,
    },
  });

  const year2024 = await prisma.academicYear.create({
    data: {
      name: "2024/2025",
      startDate: new Date("2024-09-01"),
      endDate: new Date("2025-07-30"),
      isActive: true,
    },
  });

  /**
   * TERMS
   */
  const createTerms = async (academicYearId: string) => {
    return Promise.all([
      prisma.term.create({
        data: {
          name: "First Term",
          order: 1,
          academicYearId,
          startDate: new Date("2024-09-01"),
          endDate: new Date("2024-12-15"),
        },
      }),
      prisma.term.create({
        data: {
          name: "Second Term",
          order: 2,
          academicYearId,
          startDate: new Date("2025-01-10"),
          endDate: new Date("2025-04-05"),
        },
      }),
      prisma.term.create({
        data: {
          name: "Third Term",
          order: 3,
          academicYearId,
          startDate: new Date("2025-04-20"),
          endDate: new Date("2025-07-30"),
        },
      }),
    ]);
  };

  const [y2023Terms, y2024Terms] = await Promise.all([
    createTerms(year2023.id),
    createTerms(year2024.id),
  ]);

  /**
   * SUBJECTS
   */
  const subjects = await prisma.subject.createMany({
    data: [
      { name: "Mathematics", code: "MATH", description: "Numbers & Logic" },
      { name: "English", code: "ENG", description: "Language & Literacy" },
      { name: "Basic Science", code: "SCI", description: "Science Basics" },
      { name: "Social Studies", code: "SOC", description: "Civics & Society" },
      { name: "Computer Studies", code: "ICT", description: "Technology" },
    ],
  });

  const allSubjects = await prisma.subject.findMany();

  /**
   * CLASSES (Creche → Primary 5 A/B)
   */
  const classLevels = [
    "Creche",
    "Kindergarten",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
  ];

  const classes = [];
  for (const level of classLevels) {
    if (level.startsWith("Primary")) {
      for (const arm of ["A", "B"]) {
        classes.push(
          await prisma.class.create({
            data: {
              level,
              arm,
              academicYearId: year2024.id,
            },
          })
        );
      }
    } else {
      classes.push(
        await prisma.class.create({
          data: {
            level,
            academicYearId: year2024.id,
          },
        })
      );
    }
  }

  /**
   * ASSIGN SUBJECTS TO CLASSES
   */
  for (const cls of classes) {
    for (const subject of allSubjects) {
      await prisma.classSubject.create({
        data: {
          classId: cls.id,
          subjectId: subject.id,
        },
      });
    }
  }

  /**
   * TEACHERS
   */
  const teachers = await Promise.all([
    prisma.teacher.create({
      data: {
        name: "Mrs. Ade",
        email: "ade@school.com",
        phone: "08011111111",
        hireDate: new Date("2020-01-01"),
        status: UserStatus.ACTIVE,
      },
    }),
    prisma.teacher.create({
      data: {
        name: "Mr. Bello",
        email: "bello@school.com",
        phone: "08022222222",
        hireDate: new Date("2019-03-12"),
        status: UserStatus.ACTIVE,
      },
    }),
  ]);

  /**
   * ASSIGN TEACHERS TO CLASSES & SUBJECTS
   */
  for (const teacher of teachers) {
    for (const cls of classes.slice(0, 4)) {
      for (const subject of allSubjects.slice(0, 3)) {
        await prisma.teacherClassSubject.create({
          data: {
            teacherId: teacher.id,
            classId: cls.id,
            subjectId: subject.id,
            academicYearId: year2024.id,
          },
        });
      }
    }
  }

  /**
   * PARENTS
   */
  const parent = await prisma.parent.create({
    data: {
      name: "Mr. Johnson",
      email: "parent@school.com",
      phone: "08099999999",
      address: "Lagos, Nigeria",
    },
  });

  /**
   * STUDENTS (20+)
   */
  const targetClass = classes.find(c => c.level === "Primary 3" && c.arm === "A")!;

  const students = [];
  for (let i = 1; i <= 20; i++) {
    students.push(
      await prisma.student.create({
        data: {
          admissionNumber: `ADM-${1000 + i}`,
          firstName: `Student${i}`,
          lastName: "Johnson",
          gender: i % 2 === 0 ? Gender.MALE : Gender.FEMALE,
          dateOfBirth: new Date("2015-05-01"),
          address: "Lagos",
          status: StudentStatus.ACTIVE,
          parentId: parent.id,
          currentClassId: targetClass.id,
          enrollmentDate: new Date("2023-09-01"),
        },
      })
    );
  }

  /**
   * RESULTS (2 YEARS BACK)
   */
  for (const student of students) {
    for (const subject of allSubjects.slice(0, 4)) {
      for (const term of y2023Terms) {
        const ca = Math.floor(Math.random() * 30) + 10;
        const exam = Math.floor(Math.random() * 60) + 20;
        await prisma.result.create({
          data: {
            studentId: student.id,
            classId: targetClass.id,
            subjectId: subject.id,
            academicYearId: year2023.id,
            termId: term.id,
            continuousAssessment: ca,
            examScore: exam,
            totalScore: ca + exam,
            grade: ca + exam >= 70 ? "A" : "B",
            remark: "Good",
          },
        });
      }
    }
  }

  /**
   * CLASS HISTORY
   */
  for (const student of students) {
    await prisma.studentClassHistory.create({
      data: {
        studentId: student.id,
        fromClassId: classes[0].id,
        toClassId: targetClass.id,
        academicYearId: year2024.id,
        promoted: true,
        reason: "Annual Promotion",
      },
    });
  }

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
