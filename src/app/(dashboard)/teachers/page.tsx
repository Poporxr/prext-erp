import BackButton from "@/src/components/BackButton";
import { EditField } from "@/src/components/EditField";
import Image from "next/image";
import Link from "next/link";

const TeachersPage = () => {
  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* Header */}
      <div className=" flex justify-between items-center pr-4">
        <header className="px-4 pt-6 pb-10 text-white">
          <BackButton />
          <h2 className="text-lg font-semibold">Teachers</h2>
          <p className="text-sm opacity-90 mt-1">
            Faculty members
          </p>
        </header>
        <EditField />
      </div>


      {/* Content */}
      <section className="bg-white rounded-t-4xl px-4 pt-6 pb-10">
        <div className="mb-4">
        <input 
        className="bg-[#f3f3f3] w-full p-2 border rounded-2xl border-[#a0a0a0]"
        placeholder="Search for a teacher..."
        />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { name: "Mr. Johnson", subject: "Mathematics" },
            { name: "Mrs. Adams", subject: "English" },
            { name: "Mr. Lee", subject: "Physics" },
            { name: "Ms. Brown", subject: "Biology" },
            { name: "Mrs. Becka", subject: "Economics" },
            { name: "Mr. Egggman", subject: "Agric" },
            { name: "Ms. DownLee", subject: "Social Studies" },
          ].map((teacher) => (
            <Link href={'/teachers/209239'}
              key={teacher.name}
              className="bg-[#F6F7F9] rounded-2xl p-4 shadow-sm flex flex-col gap-3"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/teachers.svg"
                  width={24}
                  height={24}
                  alt={teacher.name}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {teacher.name}
                </p>
                <p className="text-xs text-gray-500">
                  {teacher.subject}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeachersPage;
