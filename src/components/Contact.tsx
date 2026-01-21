"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useInView(0.2);
  const { ref: rightRef, isVisible: rightVisible } = useInView(0.2);

  return (
    <section className="bg-[#faf8f5] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT CARD */}
          <div
            ref={leftRef}
            className={`rounded-2xl bg-[#4b2a18] px-12 py-14 text-white transition-all duration-700 ease-out
              ${
                leftVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }
            `}
          >
            <p className="mb-4 text-xs tracking-widest uppercase text-[#c98b55] font-serif">
              Get in Touch
            </p>

            <h2 className="text-4xl font-light leading-tight">
              READY TO START<br />
              <span className="text-[#9b5d2e]">YOUR PROJECT?</span>
            </h2>

            <p className="mt-6 max-w-md text-[#e7d6c8] leading-relaxed font-serif">
              Contact us today for a free consultation. Our team of experts is
              ready to help with your fire suppression, HVAC, or commercial
              mechanical needs.
            </p>

            <Link
              href="/quote"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#9b5d2e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#864f26] transition font-serif"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* RIGHT INFO */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ease-out
              ${
                rightVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }
            `}
          >
            <h3 className="mb-10 text-2xl font-medium text-[#3a2418] font-sans">
              Contact Information
            </h3>

           <ul className="space-y-6 text-[#3a2418]">

  {/* PHONE */}
  <li>
    <a
      href="tel:13139313070"
      className="flex items-start gap-4 group"
    >
      <div className="rounded-lg bg-[#86492D]/10 p-3 text-[#86492D] transition group-hover:bg-[#86492D] group-hover:text-white">
        <Phone size={20} />
      </div>
      <div>
        <p className="text-sm text-[#8b7a6c]">Phone</p>
        <p className="font-medium group-hover:underline">
          313-931-3070
        </p>
      </div>
    </a>
  </li>

  {/* EMAIL */}
  <li>
    <a
      href="mailto:desertinalaska@outlook.com"
      className="flex items-start gap-4 group"
    >
      <div className="rounded-lg bg-[#86492D]/10 p-3 text-[#86492D] transition group-hover:bg-[#86492D] group-hover:text-white">
        <Mail size={20} />
      </div>
      <div>
        <p className="text-sm text-[#8b7a6c]">Email</p>
        <p className="font-medium group-hover:underline break-all">
          desertinalaska@outlook.com
        </p>
      </div>
    </a>
  </li>

  {/* ADDRESS (OPTIONAL MAP CTA) */}
  <li className="flex items-start gap-4">
  <div className="rounded-lg bg-[#86492D]/10 p-3 text-[#86492D]">
    <MapPin size={20} />
  </div>
  <div>
    <p className="text-sm text-[#8b7a6c]">Address</p>
    <p className="font-medium">
      11402 Schaefer Hwy, Detroit, MI 48227
    </p>
  </div>
</li>


  {/* HOURS (NO CTA) */}
  <li className="flex items-start gap-4">
    <div className="rounded-lg bg-[#86492D]/10 p-3 text-[#86492D]">
      <Clock size={20} />
    </div>
    <div>
      <p className="text-sm text-[#8b7a6c]">Business Hours</p>
      <p className="font-medium">
        Mon – Sat, 8:00 AM – 6:00 PM
      </p>
    </div>
  </li>

</ul>

          </div>

        </div>
      </div>
    </section>
  );
}
