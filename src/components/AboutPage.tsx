export default function AboutPage() {
  return (
    <section className="bg-[#422517] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {/* SMALL LABEL */}
          <p className="mb-2 text-xs uppercase tracking-widest text-[#a36a3a] font-serif">
            About Us
          </p>

          {/* HEADING */}
          <h1 className="text-5xl md:text-6xl font-normal leading-[1.1] text-white font-sans-400">
            YOUR TRUSTED <br />
            <span className="text-[#9b5d2e]">SAFETY PARTNER</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-md leading-relaxed text-[#F7F5F3CC] font-serif font-light">
            Since 1997, Desert In Alaska Corp has been Metro Detroit&apos;s
            trusted provider of fire suppression systems, commercial HVAC, and
            mechanical services.
          </p>
        </div>
      </div>
    </section>
  );
}
