"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Snowflake,
  Utensils,
  FlameKindling,
  Factory,
} from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const services = [
  {
    badge: "Primary Focus",
    icon: Flame,
    title: "Fire Suppression & Life Safety",
    description:
      "Comprehensive fire safety solutions for commercial and industrial facilities.",
    image: "/service-one.jpg",
    points: [
      "Commercial kitchen fire suppression systems (full installation and service)",
      "Fire sprinkler systems (tenant improvements: modifications, relocations, head replacements)",
      "Fire extinguisher sales and certification",
      "Emergency exit signs and emergency lighting systems",
    ],
  },
  {
    badge: "Core Service",
    icon: Snowflake,
    title: "Heating & Cooling (HVAC)",
    description:
      "Complete HVAC services for homes and light commercial buildings.",
    image: "/service-two.jpg",
    points: [
      "Residential HVAC installation",
      "Light commercial HVAC systems",
      "Repair and replacement services",
      "Preventive maintenance programs",
    ],
  },
  {
    badge: "Commercial",
    icon: Utensils,
    title: "Commercial Kitchen Exhaust Systems",
    description:
      "Professional kitchen exhaust hood solutions for restaurants and commercial kitchens.",
    image: "/service-three.jpg",
    points: [
      "Kitchen exhaust hood installation",
      "Exhaust system servicing",
      "System support and maintenance",
      "Code-compliant installations",
    ],
  },
  {
    badge: "Mechanical",
    icon: FlameKindling,
    title: "Gas Piping & Mechanical Services",
    description:
      "Expert gas piping and mechanical modifications for commercial facilities.",
    image: "/service-four.jpg",
    points: [
      "Commercial gas piping installation",
      "Tenant improvements",
      "System modifications",
      "Safety inspections and compliance",
    ],
  },
  {
    badge: "Industrial",
    icon: Factory,
    title: "Industrial Dry Chemical Systems",
    description: "Specialized fire suppression for industrial environments.",
    image: "/service-five.jpg",
    points: [
      "Collision shop fire suppression",
      "Industrial paint booth systems",
      "Dry chemical system installation",
      "System maintenance and inspection",
    ],
  },
];

export default function ServiceCard() {
  return (
    <section className="bg-[#faf8f5] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* IMAGE */}
              <div
                className={`relative w-full overflow-hidden rounded-2xl
                h-64 sm:h-80 md:h-105
                order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* CONTENT */}
              <div
                className={`order-2 max-w-xl
                ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
              >
                {/* BADGE */}
                <div className="inline-flex items-center gap-3 font-serif text-sm sm:text-base font-medium text-[#7b4a2d]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#efe7de]">
                    <Icon className="h-6 w-6 shrink-0 text-[#7b4a2d]" />
                  </span>
                  {service.badge}
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-sans text-[#2b1a12]">
                  {service.title}
                </h2>

                <p className="mt-4 text-sm sm:text-base font-serif leading-relaxed text-[#5a4a42]">
                  {service.description}
                </p>

                {/* POINTS */}
                <ul className="mt-6 space-y-3 sm:space-y-4 font-serif">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                        <IoMdCheckmarkCircleOutline className="h-5 w-5 shrink-0 text-[#86522d]" />
                      </span>
                      <span className="text-sm leading-relaxed text-[#3f3029]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#3b2416] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a180f]"
                >
                  Request Service <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
