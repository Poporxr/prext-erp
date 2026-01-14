"use client";

import BackButton from "@/src/components/BackButton";
import { useParams } from "next/navigation";
import { useState } from "react";


type Student = {
  id: string;
  name: string;
  age: number;
  sex: string;
  className: string;
  height: string;
};

const mockSubjects = [
  { subject: "Maths", score: 84 },
  { subject: "English", score: 78 },
  { subject: "Basic Science", score: 72 },
];


export default function EditResultPage({
  params,
}: {
  params: { studentId: string };
}) {
  const [subjects, setSubjects] = useState(mockSubjects);
  const [remark, setRemark] = useState("");
    const { studentId } = useParams<{ studentId: string }>();


  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />
        <h2 className="text-xl font-semibold mt-4">Edit Result</h2>
      </header>

      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-54">
        <div className="space-y-4">
          {subjects.map((s, i) => (
            <div key={s.subject} className="bg-[#f4f4f4] p-4 rounded-2xl">
              <p className="font-medium">{s.subject}</p>
              <input
                type="number"
                value={s.score}
                className="mt-2 w-full rounded-xl px-3 py-2"
              />
            </div>
          ))}

          <textarea
            placeholder="Teacher's remark"
            className="w-full rounded-2xl border p-4"
            rows={4}
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />

          <button className="w-full py-3 rounded-full bg-black text-white font-semibold">
            Save Result
          </button>
        </div>
      </section>
    </main>
  );
}
