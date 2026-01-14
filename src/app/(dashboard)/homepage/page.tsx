import Image from "next/image";
import Link from "next/link";

const homepage = () => {
  
  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* Header */}
      <header className="px-4 pt-6 pb-10 text-white flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Hi, Emmanuel</h2>
          <div className="flex gap-2 text-sm opacity-90 mt-1">
            <span>Student</span>
            <span>•</span>
            <span>Class 3B</span>
          </div>
          <span className="inline-block mt-2 px-3 py-1 bg-white/90 text-[#345FB4] text-xs rounded-full font-medium">
            2024 / 2025
          </span>
        </div>

        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Image src="/profile.svg" width={28} height={28} alt="Profile" />
        </div>
      </header>

      {/* Content */}
      <section className="bg-white rounded-t-4xl px-4 pt-8 pb-10 lg:h-screen h-screen">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            {href:"/classes/1324", label: "Students", icon: "/students.svg" },
            {href:"/results", label: "Results", icon: "/result.svg" },
            {href:"/inbox", label: "Inbox", icon: "/inbox.svg" },
            {href:"/teachers",  label: "Teachers", icon: "/teachers.svg" },
            {href:"/timetable",  label: "Timetable", icon: "/timetable.svg" },
            {href:"/classes",  label: "Classes", icon: "/class.svg" },
            {href:"faqs/",  label: "FAQs", icon: "/faqs.svg" },
            { href:"/logout", label: "Logout", icon: "/logout.svg" },
          ].map((item) => (
            <Link href={item.href}
              key={item.label}
              className="bg-[#F6F7F9] rounded-2xl p-4 flex flex-col items-start gap-3 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Image src={item.icon} width={22} height={22} alt={item.label} />
              </div>
              <p className="text-sm font-medium text-gray-800">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default homepage;
