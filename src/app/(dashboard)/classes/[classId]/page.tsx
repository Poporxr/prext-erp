import BackButton from "@/src/components/BackButton";
import { EditField } from "@/src/components/EditField";
import Image from "next/image";
import Link from "next/link";

interface Student {
  id: number;
  name: string;
  rollNo: string;
}

const generateStudents = (): Student[] => {
  return Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    rollNo: `${(i + 1).toString().padStart(2, "0")}`,
  }));
};

export default function SingleClassPage({
  params,
}: {
  params: { classId?: string };
}) {
  const students = generateStudents();

  const rawClassId = params?.classId ?? "unknown-class";
  const className = rawClassId.replace(/-/g, " ").toUpperCase();

  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* Header */}
      <div className=" flex justify-between items-center pr-4">
        <header className="px-4 pt-6 pb-10 text-white">
          <BackButton />
          <p className="text-sm opacity-90">Class</p>
          <h2 className="text-xl font-semibold">{className}</h2>

          <div className="mt-3 flex gap-4 text-sm">
            <span>{students.length} Students</span>
            <span>2024 / 2025</span>
          </div>
        </header>
        <Link href={'/classes/0290394/edit'} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Image src="/edit.svg" width={28} height={28} alt="Profile" />
        </Link>
      </div>


      {/* Content */}
      <section className="bg-white rounded-t-4xl px-4 pt-6 pb-55 ">
        <div className="bg-[#F6F7F9] rounded-2xl p-4 mb-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Class Teacher</p>
            <p className="font-semibold text-gray-800">Mrs. Adams</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Image src="/teachers.svg" width={20} height={20} alt="teacher" />
          </div>
        </div>

        <h3 className="text-sm font-semibold text-gray-600 mb-4">
          Students
        </h3>

        <div className="flex flex-col gap-3">
          {students.map((student) => (
            <Link href={'/students/34t423'}
              key={student.id}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#345FB4]/10 flex items-center justify-center text-sm font-semibold text-[#345FB4]">
                  {student.rollNo}
                </div>
                <p className="text-sm font-medium text-gray-800">
                  {student.name}
                </p>
              </div>

              <Image
                src="/profile.svg"
                width={18}
                height={18}
                alt="profile"
                className="opacity-60"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
