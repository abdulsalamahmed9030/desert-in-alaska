import { ShieldCheck, Award, Users, Target } from "lucide-react";

export default function OurValues() {
  return (
    <section className="bg-[#eeebe8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl text-[#3b2a1f] font-sans">
            OUR VALUES
          </h2>
          <p className="mt-4 text-base text-[#7a6a5c] font-serif">
            The principles that guide everything we do.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* CARD 1 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4efe9] text-[#8b5428]">
              <ShieldCheck size={22} />
            </div>
            <h3 className="mb-3 text-lg font-medium text-[#3b2a1f]">
              Safety First
            </h3>
            <p className="text-sm leading-relaxed text-[#7a6a5c] font-serif">
              Every installation meets or exceeds safety codes and standards.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4efe9] text-[#8b5428]">
              <Award size={22} />
            </div>
            <h3 className="mb-3 text-lg font-medium text-[#3b2a1f]">
              Quality Workmanship
            </h3>
            <p className="text-sm leading-relaxed text-[#7a6a5c] font-serif">
              Certified technicians delivering excellence on every project.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4efe9] text-[#8b5428]">
              <Users size={22} />
            </div>
            <h3 className="mb-3 text-lg font-medium text-[#3b2a1f]">
              Customer Focus
            </h3>
            <p className="text-sm leading-relaxed text-[#7a6a5c] font-serif">
              Building lasting relationships through reliable service.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4efe9] text-[#8b5428]">
              <Target size={22} />
            </div>
            <h3 className="mb-3 text-lg font-medium text-[#3b2a1f]">
              Precision
            </h3>
            <p className="text-sm leading-relaxed text-[#7a6a5c] font-serif">
              Attention to detail in every aspect of our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
