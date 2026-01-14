"use client";

import BackButton from "@/src/components/BackButton";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Input } from "@/src/components/Input";

type Student = {
  id: string;
  name: string;
  age: number;
  sex: string;
  className: string;
  height: string;
};

function fetchStudentById(id: string): Student {
  return {
    id,
    name: "Popor Emmanuel",
    age: 9,
    sex: "Male",
    className: "Primary 3B",
    height: "135cm",
  };
}

export default function EditStudentPage() {
  const { studentId } = useParams<{ studentId: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    setStudent(fetchStudentById(studentId));
  }, [studentId]);

  if (!student) return null;

  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />
        <h2 className="text-xl font-semibold mt-4">
          Edit {student.name}
        </h2>
      </header>

      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-24">
        <form className="space-y-5">
          <Input label="Full Name" defaultValue={student.name} />
          <Input label="Age" type="number" defaultValue={student.age} />
          <Input label="Sex" defaultValue={student.sex} />
          <Input label="Class" defaultValue={student.className} />
          <Input label="Height" defaultValue={student.height} />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#0a1429] text-white font-semibold"
          >
            Save Changes
          </button>
        </form>
      </section>
    </main>
  );
}

