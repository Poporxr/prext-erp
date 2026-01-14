'use client'
import Image from "next/image";
import BackButton from "@/src/components/BackButton";
import { mockResultData } from "@/src/utils/mockresultdata";
import Link from "next/link";



interface SubjectResult {
  subject: string;
  score: number;
  classAverage: number;
  highest: number;
  lowest: number;
  position: number;
  grade: string;
  remark: string;
}

interface StudentResult {
  studentId: string;
  fullName: string;
  registrationNo: string;
  className: string;
  term: "FIRST" | "SECOND" | "THIRD";
  nextTermBegins: string;

  subjects: SubjectResult[];

  totals: {
    totalScore: number;
    studentAverage: number;
    classAverage: number;
    positionInClass: number;
  };

  affectiveDomain: {
    artsCraft: number;
    fluency: number;
    gamesSport: number;
    handwriting: number;
    handlingTools: number;
  };

  psychomotorDomain: {
    attentiveness: number;
    honesty: number;
    neatness: number;
    politeness: number;
    punctuality: number;
    relationship: number;
    responsibility: number;
  };

  teacherRemark: string;
}

export default function StudentResultPage() {
  const data = mockResultData;

  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* HEADER */}
      <div className="flex justify-between pr-4">
              <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />

        <div className="flex items-center gap-4 mt-4">
          <div className="bg-white p-3 rounded-full">
            <Image src="/profile.svg" alt="profile" width={48} height={48} />
          </div>

          <div>
            <h2 className="text-xl font-semibold">{data.fullName}</h2>
            <p className="text-sm opacity-90">
              {data.className} · {data.term} TERM
            </p>
          </div>
        </div>

        <div className="mt-3 text-sm opacity-90">
          Reg No: {data.registrationNo}
        </div>
      </header>
      <Link href={'/students/result/305894/edit'} className="bg-white mt-6 w-10 flex justify-center h-10 rounded-full">
        <Image src={'/edit.svg'} width={20} height={20} alt="image"/>
      </Link>
      </div>


      {/* CONTENT */}
      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-20 min-h-screen">
        {/* SUMMARY */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <SummaryCard label="Total Score" value={data.totals.totalScore} />
          <SummaryCard
            label="Average"
            value={`${data.totals.studentAverage}%`}
          />
          <SummaryCard
            label="Class Avg"
            value={`${data.totals.classAverage}%`}
          />
          <SummaryCard
            label="Position"
            value={`${data.totals.positionInClass}`}
          />
        </div>

        {/* SUBJECT RESULTS */}
        <h3 className="text-lg font-semibold mb-4">Subject Results</h3>

        <div className="space-y-3">
          {data.subjects.map((subject) => (
            <div
              key={subject.subject}
              className="bg-[#f4f4f4] rounded-2xl p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{subject.subject}</p>
                <span className="font-bold">{subject.score}</span>
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-1">
                <p>Grade: {subject.grade}</p>
                <p>Position: {subject.position}</p>
                <p>Highest: {subject.highest}</p>
                <p>Average: {subject.classAverage}</p>
              </div>

              <p className="mt-2 text-sm font-medium text-gray-700">
                Remark: {subject.remark}
              </p>
            </div>
          ))}
        </div>

        {/* AFFECTIVE DOMAIN */}
        <Section title="Affective Domain">
          <RatingGrid data={data.affectiveDomain} />
        </Section>

        {/* PSYCHOMOTOR DOMAIN */}
        <Section title="Psychomotor Domain">
          <RatingGrid data={data.psychomotorDomain} />
        </Section>

        {/* TEACHER REMARK */}
        <div className="mt-8 bg-[#f4f4f4] rounded-2xl p-4">
          <h4 className="font-semibold mb-2">Teacher’s Remark</h4>
          <p className="text-sm">{data.teacherRemark}</p>
        </div>

        {/* NEXT TERM */}
        <div className="mt-6 text-sm font-medium text-gray-600">
          Next Term Begins: {data.nextTermBegins}
        </div>
      </section>
    </main>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-[#f4f4f4] rounded-2xl px-4 py-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-bold text-lg">{value}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function RatingGrid({ data }: { data: Record<string, number> }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className="bg-[#f4f4f4] rounded-2xl px-4 py-3 text-sm"
        >
          <p className="capitalize text-gray-600">
            {key.replace(/([A-Z])/g, " $1")}
          </p>
          <p className="font-semibold">{value} / 5</p>
        </div>
      ))}
    </div>
  );
}

