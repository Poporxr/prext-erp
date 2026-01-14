"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm font-medium py-1 px-2 text-white/90 hover:text-white transition bg-[#acc9f3] mb-2 rounded-lg"
    >
      <span className="text-lg leading-none">←</span>
      <span>{label}</span>
    </button>
  );
}
