"use client";

import BackButton from "@/src/components/BackButton";
import { useState } from "react";

export default function EditTeacherPage() {
  const [form, setForm] = useState({
    name: "Mrs. Johnson",
    subject: "Mathematics",
    phone: "08012345678",
    email: "teacher@school.com",
  });

  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />
        <h2 className="text-xl font-semibold mt-4">Edit Teacher</h2>
      </header>

      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-24">
        <form className="space-y-5">
          <Input label="Full Name" value={form.name} />
          <Input label="Subject" value={form.subject} />
          <Input label="Phone" value={form.phone} />
          <Input label="Email" value={form.email} />

          <button className="w-full py-3 rounded-full bg-[#0a1429] text-white font-semibold">
            Save Teacher
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
