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

  // --- You can edit these later if needed ---
  
 
 
];

export default function ServiceCard() {
  return (
    <>
      {services.map((service, index) => {
        const isImageLeft = index % 2 === 0;
        const Icon = service.icon;

        return (
          <section key={index} className="bg-[#faf8f5] py-16">
            <div className="mx-auto max-w-7xl px-4">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {isImageLeft && (
                  <div className="relative h-84 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {/* CONTENT */}
                <div>
                  <span className="inline-flex items-center font-serif gap-2 rounded-full px-4 py-1.5 text-md font-medium text-[#7b4a2d]">
                    <div className="bg-[#efe7de] p-4 rounded-md">
                      <Icon className="h-6 w-6 " />
                    </div>
                    {service.badge}
                  </span>

                  <h2 className="mt-5 text-3xl font-sans text-[#2b1a12]">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-base font-serif leading-relaxed text-[#5a4a42]">
                    {service.description}
                  </p>

                   <ul className="mt-6 space-y-4 font-serif">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <IoMdCheckmarkCircleOutline
                          className="mt-0.5 h-5 w-5 text-[#86522d]"
                        />
                        <span className="text-sm leading-relaxed text-[#3f3029]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#3b2416] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2a180f]"
                  >
                    Request Service <span className="text-lg">→</span>
                  </Link>
                </div>

                {!isImageLeft && (
                  <div className="relative h-84 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
