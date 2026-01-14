import BackButton from "@/src/components/BackButton";
import { mockResultsHistory } from "@/src/utils/mockresultdata";
import Link from "next/link";

export default function ResultsHistoryPage({
  params,
}: {
  params: { studentId: string };
}) {
  return (
    <main className="min-h-screen bg-[#345FB4] font-serif">
      {/* HEADER */}
      <header className="px-4 pt-6 pb-10 text-white">
        <BackButton />
        <h2 className="text-xl font-semibold mt-4">Academic Results</h2>
        <p className="text-sm opacity-90">
          View results from previous sessions
        </p>
      </header>

      {/* CONTENT */}
      <section className="bg-white rounded-t-[40px] px-4 pt-8 pb-24 min-h-screen">
        {mockResultsHistory.map((year) => (
          <div key={year.session} className="mb-10">
            {/* SESSION HEADER */}
            <h3 className="text-lg font-semibold mb-4">
              {year.session} Academic Session
            </h3>

            {/* TERM CARDS */}
            <div className="space-y-3">
              {year.results.map((result) => (
                <Link
                  key={result.term}
                  href={`/students/results/${params.studentId}?session=${year.session}&term=${result.term}`}
                  className="block"
                >
                  <div className="bg-[#f4f4f4] rounded-2xl p-4 flex justify-between items-center hover:bg-[#ececec] transition">
                    <div>
                      <p className="font-semibold">{result.term}</p>
                      <p className="text-sm text-gray-600">
                        Average: {result.average}%
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-600">Position</p>
                      <p className="font-bold">{result.position}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
