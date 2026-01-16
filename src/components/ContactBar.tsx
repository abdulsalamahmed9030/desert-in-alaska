export default function ContactBar() {
  return (
    <div className="w-full bg-[#82512e] text-white">
      <div className="
        max-w-7xl mx-auto px-4 py-5
        flex flex-col gap-2
        md:flex-row md:items-center md:justify-between
        text-sm md:text-base
      ">
        
        {/* Left Text */}
        <p className="font-light font-serif text-center md:text-left">
          Need emergency service? We&apos;re here to help.
        </p>

        {/* Right Phone */}
        <div className="flex items-center justify-center gap-2 font-semibold md:justify-end">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.27 1.05l-1.27 1.27a16 16 0 006.59 6.59l1.27-1.27a1 1 0 011.05-.27l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
            />
          </svg>
          <span>313-931-3070</span>
        </div>

      </div>
    </div>
  );
}
