export default function OurJourney() {
  const timeline = [
    {
      year: "1997",
      text: "Founded as HVAC service provider",
    },
    {
      year: "2005",
      text: "Expanded into commercial kitchen services",
    },
    {
      year: "2010",
      text: "Added fire suppression systems",
    },
    {
      year: "2015",
      text: "Industrial dry chemical certification",
    },
    {
      year: "2020",
      text: "Celebrating 20+ years of service",
    },
    {
      year: "Today",
      text: "Metro Detroit's trusted fire safety experts",
    },
  ];

  return (
    <section className="bg-[#faf8f5] py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION TITLE */}
        <h2 className="mb-16 text-center text-4xl md:text-5xl font-sans text-[#3b2a1f]">
          OUR JOURNEY
        </h2>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-xl">
          {/* VERTICAL LINE */}
          <div className="absolute left-1.5 top-0 h-full w-px bg-[#e2d9cf]" />

          <ul className="space-y-10">
            {timeline.map((item, index) => (
              <li key={index} className="relative pl-16">
                {/* DOT */}
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-[#8b5428]" />

                {/* CONTENT */}
                <h3 className="text-2xl font-medium text-[#8b5428]">
                  {item.year}
                </h3>
                <p className="mt-2 text-base text-[#3b2a1f] font-serif">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
