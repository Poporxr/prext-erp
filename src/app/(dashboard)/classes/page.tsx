import BackButton from "@/src/components/BackButton";
import { EditField } from "@/src/components/EditField";
import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    title: "Early Years",
    items: ["Creche", "Kindergarten"],
  },
  {
    title: "Primary Classes",
    items: [
      "Primary 1A",
      "Primary 1B",
      "Primary 2A",
      "Primary 2B",
      "Primary 3A",
      "Primary 3B",
      "Primary 4A",
      "Primary 4B",
      "Primary 5A",
      "Primary 5B",
    ],
  },
];

const ClassesPage = () => {
  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* Header */}
            <div className=" flex justify-between items-center pr-4">
                   <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />
        <h2 className="text-lg font-semibold">Classes</h2>
        <p className="text-sm opacity-90 mt-1">
          Academic class structure
        </p>
      </header> 
      <EditField />
      </div>


      {/* Content */}
      <section className="bg-white rounded-t-4xl px-4 pt-10 pb-60 ">
        <div className="flex flex-col gap-8">
          {classes.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-gray-600 mb-4">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.items.map((item) => (
                  <Link href={"/classes/32838"}
                    key={item}
                    className="bg-[#F6F7F9] rounded-2xl p-4 shadow-sm flex items-center justify-between cursor-pointer active:scale-[0.98] transition"
                  >
                    <span className="font-medium text-gray-800 text-sm">
                      {item}
                    </span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src="/students.svg"
                        width={16}
                        height={16}
                        alt={item}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ClassesPage;
