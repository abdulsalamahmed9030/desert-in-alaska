"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Wind, Utensils, Fuel, Factory } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: <Wind />,
    title: "Heating & Cooling (HVAC)",
    image: "/hvac.jpg",
    text:
      "Residential and light commercial HVAC services including installation, repair, replacement, and maintenance.",
  },
  {
    icon: <Utensils />,
    title: "Commercial Kitchen Exhaust",
    image: "/kitchen.jpg",
    text:
      "Kitchen exhaust hood installation and servicing. Complete system support for commercial kitchens.",
  },
  {
    icon: <Fuel />,
    title: "Gas Piping & Mechanical",
    image: "/gas.jpg",
    text:
      "Commercial gas piping, tenant improvements, and system modifications for commercial facilities.",
  },
  {
    icon: <Factory />,
    title: "Industrial Dry Chemical Systems",
    image: "/industrial.jpg",
    text:
      "Dry chemical fire suppression systems for collision shops and industrial paint booths.",
  },
];

function ServiceCard({ item }: { item: typeof services[number] }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md
        transition-all duration-500 ease-out will-change-transform
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }
      `}
    >
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#8b5428] text-white shadow-md">
          {item.icon}
        </div>
      </div>

      <div className="p-8 pt-6">
        <h4 className="text-lg font-medium text-[#3b2a1f] font-sans-400">
          {item.title}
        </h4>
        <p className="mt-3 text-sm text-[#876C61] font-serif">
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#eeebe8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <p className="text-xs uppercase tracking-widest text-[#8b5428] font-serif">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-[#3b2a1f] font-sans-400">
            OUR SERVICES
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#6b5a4d] font-serif">
            Comprehensive fire safety, HVAC, and mechanical services for
            commercial and industrial clients.
          </p>
        </div>

        {/* Featured Service */}
        <div
          className={`mt-16 overflow-hidden rounded-2xl relative transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <Image
            src="/fire.jpg"
            alt="Fire Suppression"
            width={1400}
            height={600}
            className="h-105 w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#b6876f] mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-10 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8b5428] px-4 py-2 text-sm">
                <Flame size={16} />
                Primary Focus
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium font-sans-400">
                Fire Suppression & Life Safety
              </h3>

              <p className="mt-4 text-white/85 font-serif">
                Commercial kitchen fire suppression systems, fire sprinkler
                modifications, fire extinguisher sales and certification,
                emergency lighting systems.
              </p>

              <Link
                href="/services/fire-suppression"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#8b5428] px-6 py-3 text-sm font-semibold hover:bg-[#73431f] transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid (INDIVIDUAL CARD ANIMATION) */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[#3b2a1f] px-8 py-4 text-sm font-semibold text-[#3b2a1f] hover:bg-[#3b2a1f] hover:text-white transition"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
