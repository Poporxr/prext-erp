import Image from "next/image";
import BackButton from "@/src/components/BackButton";
import Link from "next/link";
import InfoCard from "@/src/components/InfoCard";


const subjects = [
    "Mathematics",
    "English"
];

export default function SingleTeacherPage({
    params,
}: {
    params: { teacherId: string };
}) {
    const teacher = {
        teacherId: '3R2S44',
        name: "Mrs. Becka",
        sex: "Male",
        class: "Primary 3B",
        phoneNo: '09160802182',
        email: 'becka@gmail.com',
        profileImage: "/profile.svg",
        currentSession: '2025/2026',
        height: '9|2'
    };

    return (
        <main className="min-h-screen bg-[#345FB4] font-serif">
            {/* HEADER */}
            <header className="px-4 pt-6 pb-10 text-white">
                <BackButton />

                <div className="flex items-center gap-4 mt-4">
                    <div className="bg-white p-3 rounded-full">
                        <Image
                            src={teacher.profileImage}
                            alt="profile"
                            width={48}
                            height={48}
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">{teacher.name}</h2>
                        <p className="text-sm opacity-90">
                            TeacherId:  {teacher.teacherId}
                        </p>
                    </div>
                </div>

                <div className="mt-3 text-sm opacity-90">
                    Academic Session: {teacher.currentSession}
                </div>
            </header>

            {/* CONTENT */}
            <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-50 min-h-screen">
                {/* TEACHER INFO */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                    <InfoCard label="Contact" value={teacher.phoneNo} />
                    <InfoCard label="Email" value={teacher.email} />
                    <InfoCard label="Height" value={teacher.height} />
                    <InfoCard label="Class" value={teacher.class} />
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


                {/* ACTION BUTTONS */}
                <div className="flex flex-col gap-3 mt-10">

                    <Link href={'/teachers/3R2S44/edit'} className="w-full py-3 rounded-full bg-[#0a1429] text-white font-semibold hover:bg-[#172c58] transition text-center">
                        Edit Teacher Details
                    </Link>
                </div>
            </section>
        </main>
    );
}
