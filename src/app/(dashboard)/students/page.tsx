import BackButton from "@/src/components/BackButton";
import Link from "next/link";

const StudentsPage = () => {
  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* Header */}
      <header className="px-4 pt-6 pb-10 text-white">
      <BackButton/>
        <h2 className="text-lg font-semibold">Students</h2>
        <p className="text-sm opacity-90 mt-1">
          Class members
        </p>
      </header>

      {/* Content */}
      <section className="bg-white rounded-t-4xl px-4 pt-6 pb-10 h-screen">
        <div className="flex flex-col gap-3">
          {[
            { name: "Alice Brown", roll: "01" },
            { name: "Daniel Smith", roll: "02" },
            { name: "Mary Johnson", roll: "03" },
            { name: "John Doe", roll: "04" },
          ].map((student) => (
            <Link href={'/students/34t423'}
              key={student.roll}
              className="flex items-center justify-between bg-[#F6F7F9] p-4 rounded-xl shadow-sm"
            >
              <span className="font-medium text-gray-800">
                {student.name}
              </span>
              <span className="text-sm text-gray-500">
                Roll {student.roll}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StudentsPage;
