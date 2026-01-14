"use client";

import BackButton from "@/src/components/BackButton";
import { useState } from "react";

export default function EditClassPage() {
  const [form, setForm] = useState({
    className: "Primary 3",
    arm: "B",
    teacher: "Mrs Johnson",
    capacity: 30,
  });

  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />
        <h2 className="text-xl font-semibold mt-4">Edit Class</h2>
      </header>

      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-24">
        <form className="space-y-5">
          <Input label="Class Name" value={form.className} />
          <Input label="Arm" value={form.arm} />
          <Input label="Class Teacher" value={form.teacher} />
          <Input label="Capacity" type="number" value={form.capacity} />

          <button className="w-full py-3 rounded-full bg-[#0a1429] text-white font-semibold">
            Save Class
          </button>
        </form>
      </section>
    </main>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-2xl border px-4 py-3 outline-none"
      />
    </div>
  );
}
