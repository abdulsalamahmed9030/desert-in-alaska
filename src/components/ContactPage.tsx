export default function ContactPage() {
  return (
    <section className="bg-[#422517] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {/* SMALL LABEL */}
          <p className="mb-2 text-xs uppercase tracking-widest text-[#a36a3a] font-serif">
            Contact Us
          </p>

          {/* HEADING */}
          <h1 className="text-5xl md:text-6xl font-normal leading-[1.1] text-white font-sans-400">
            GET IN TOUCH <br />
            <span className="text-[#9b5d2e]">WITH OUR TEAM</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-md leading-relaxed text-[#F7F5F3CC] font-serif font-light">
            Ready to discuss your project? Contact us today for a free
            consultation and quote.
          </p>
        </div>
      </div>
    </section>
  );
}
