import Image from "next/image";
import BackButton from "@/src/components/BackButton";
import Link from "next/link";

const subjects = [
  "Mathematics",
  "English",
  "Basic Science",
  "Social Studies",
  "Civic Education",
  "Computer Studies",
  "Creative Arts",
  "Physical & Health Education",
];

export default function SingleStudentPage({
  params,
}: {
  params: { studentId: string };
}) {
  const student = {
    name: "Popor Fx",
    age: 9,
    sex: "Male",
    height: "135cm",
    class: "Primary 3B",
    rollNo: "06",
    session: "2024 / 2025",
    profileImage: "/profile.svg",
  };

  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* HEADER */}
      <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />

        <div className="flex items-center gap-4 mt-4">
          <div className="bg-white p-3 rounded-full">
            <Image
              src={student.profileImage}
              alt="profile"
              width={48}
              height={48}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-sm opacity-90">
              Class {student.class} · Roll No {student.rollNo}
            </p>
          </div>
        </div>

        <div className="mt-3 text-sm opacity-90">
          Academic Session: {student.session}
        </div>
      </header>

      {/* CONTENT */}
      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-50 min-h-screen">
        {/* STUDENT INFO */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-8">
          <InfoCard label="Age" value={`${student.age} yrs`} />
          <InfoCard label="Sex" value={student.sex} />
          <InfoCard label="Height" value={student.height} />
          <InfoCard label="Class" value={student.class} />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3 mb-10">
          <Link href={'/students/results/239823'} className="w-full py-3 rounded-full bg-[#0a1429] text-white font-semibold hover:bg-[#172c58] transition text-center">
            View Results
          </Link>

          <Link href={'/results'} className="w-full py-3 rounded-full border border-[#0a1429] text-[#0a1429] font-semibold hover:bg-gray-100 transition text-center">
            Update Results
          </Link>

          <Link href={'/students/23224/edit'} className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition text-center">
            Edit Student Details
          </Link>
        </div>

        {/* SUBJECTS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subjects</h3>

          <div className="grid grid-cols-2 gap-3">
            {subjects.map((subject) => (
              <div
                key={subject}
                className="bg-[#f4f4f4] rounded-2xl px-4 py-3 text-sm font-medium"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* SMALL REUSABLE CARD */
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f4f4f4] rounded-2xl px-4 py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
