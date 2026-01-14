export function Input({ label, ...props }: any) {
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
