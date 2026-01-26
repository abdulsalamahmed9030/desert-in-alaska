"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-[#faf8f5] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-stretch">
          {/* LEFT – REQUEST A QUOTE */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-[#432719]">
                REQUEST A QUOTE
              </h2>

              <form className="space-y-5">
                {/* NAME + PHONE */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-[#6b5a4d]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-[#6b5a4d]">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      placeholder="(313) 6543210"
                      className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-1 block text-sm text-[#6b5a4d]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className="mb-1 block text-sm text-[#6b5a4d]">
                    Service Needed
                  </label>
                  <select className="w-full rounded-md border border-[#e5ded8] bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]">
                    <option>Select a service...</option>
                    <option>Fire Suppression</option>
                    <option>HVAC</option>
                    <option>Kitchen Exhaust</option>
                    <option>Gas Piping</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-1 block text-sm text-[#6b5a4d]">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#86522d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f4224]"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT – CONTACT INFO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-[#432719]">
              CONTACT INFORMATION
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6b5a4d]">
              Have questions? Our team is ready to help. Reach out to us through
              any of the following channels.
            </p>

            <div className="mt-6 space-y-4">
              {/* PHONE CTA */}
              <a
                href="tel:3139313070"
                className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="rounded-md bg-[#86522d] p-3 text-white transition group-hover:bg-[#6f4224]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Phone</p>
                  <p className="font-medium text-[#432719] group-hover:underline">
                    313-931-3070
                  </p>
                </div>
              </a>

              {/* EMAIL CTA */}
              <a
                href="mailto:desertinalaska@outlook.com"
                className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="rounded-md bg-[#86522d] p-3 text-white transition group-hover:bg-[#6f4224]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Email</p>
                  <p className="font-medium text-[#432719] group-hover:underline">
                    desertinalaska@outlook.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="rounded-md bg-[#86522d] p-3 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Address</p>
                  <p className="font-medium text-[#432719]">
                    11402 Schaefer Hwy
                    <br />
                    Detroit, MI 48227
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="rounded-md bg-[#86522d] p-3 text-white">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Business Hours</p>
                  <p className="font-medium text-[#432719]">
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps?q=11402+Schaefer+Hwy,+Detroit,+MI+48227&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
