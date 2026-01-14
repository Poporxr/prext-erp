export const mockResultData = {
  studentId: "STD-00321",
  fullName: "Popor Emmanuel",
  registrationNo: "MNP/2024/00321",
  className: "Primary 3B",
  term: "SECOND",
  nextTermBegins: "15th April, 2025",

  subjects: [
    {
      subject: "English Language",
      score: 78,
      classAverage: 65,
      highest: 92,
      lowest: 40,
      position: 4,
      grade: "A",
      remark: "Excellent",
    },
    {
      subject: "Mathematics",
      score: 84,
      classAverage: 70,
      highest: 95,
      lowest: 45,
      position: 2,
      grade: "A",
      remark: "Outstanding",
    },
    {
      subject: "Basic Science",
      score: 72,
      classAverage: 68,
      highest: 88,
      lowest: 50,
      position: 6,
      grade: "B",
      remark: "Very Good",
    },
    {
      subject: "Social Studies",
      score: 69,
      classAverage: 63,
      highest: 85,
      lowest: 42,
      position: 8,
      grade: "B",
      remark: "Good",
    },
    {
      subject: "Civic Education",
      score: 75,
      classAverage: 66,
      highest: 90,
      lowest: 48,
      position: 5,
      grade: "A",
      remark: "Very Good",
    },
    {
      subject: "Computer Studies",
      score: 88,
      classAverage: 71,
      highest: 96,
      lowest: 55,
      position: 1,
      grade: "A",
      remark: "Excellent",
    },
  ],

  totals: {
    totalScore: 466,
    studentAverage: 77.7,
    classAverage: 67.2,
    positionInClass: 3,
  },

  affectiveDomain: {
    artsCraft: 4,
    fluency: 5,
    gamesSport: 4,
    handwriting: 4,
    handlingTools: 5,
  },

  psychomotorDomain: {
    attentiveness: 5,
    honesty: 5,
    neatness: 4,
    politeness: 5,
    punctuality: 4,
    relationship: 5,
    responsibility: 5,
  },

  teacherRemark:
    "Popor is a brilliant and hardworking pupil. He shows strong understanding across subjects. Keep it up!",
};
export const mockResultsHistory = [
  {
    session: "2024 / 2025",
    results: [
      { term: "First Term", average: 74.2, position: 5 },
      { term: "Second Term", average: 77.7, position: 3 },
    ],
  },
  {
    session: "2023 / 2024",
    results: [
      { term: "First Term", average: 69.4, position: 8 },
      { term: "Second Term", average: 71.1, position: 6 },
      { term: "Third Term", average: 73.0, position: 5 },
    ],
  },
];
