import { Check } from "lucide-react";

const items = [
  "State Licensed Contractor",
  "Fire Suppression Certified",
  "HVAC Licensed",
  "Fully Insured",
  "Code Compliant",
];

export default function Certifications() {
  return (
    <section className="bg-[#432719] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-medium text-white tracking-wide">
          LICENSED &amp; CERTIFIED
        </h2>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-6 font-serif">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9b5d2e]">
                <Check size={14} className="text-white" />
              </span>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
