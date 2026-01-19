"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const galleryItems = [
  {
    src: "/gallery1.jpg",
    title: "Commercial Kitchen Fire Suppression",
    tag: "Fire Suppression",
  },
  {
    src: "/gallery2.jpg",
    title: "Commercial Kitchen Fire Suppression",
    tag: "Fire Suppression",
  },
  {
    src: "/gallery3.jpg",
    title: "Commercial Kitchen Fire Suppression",
    tag: "Fire Suppression",
  },
  {
    src: "/gallery4.jpg",
    title: "Commercial Kitchen Fire Suppression",
    tag: "Fire Suppression",
  },
  {
    src: "/gallery3.jpg",
    title: "Commercial Kitchen Fire Suppression",
    tag: "Fire Suppression",
  },
  {
    src: "/gallery5.jpg",
    title: "Commercial Kitchen Fire Suppression",
    tag: "Fire Suppression",
  },
];

export default function Gallery() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section className="bg-[#faf8f5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-widest text-[#8b5428] font-serif">
            Our Works
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl leading-[1.01] text-[#3b2a1f]">
            FEATURED PROJECTS
          </h2>
          <p className="text-sm pt-4 text-[#8b5428] font-serif">
            Explore our recent commercial and industrial installations across
            Metro Detroit.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 220}ms` }}
              className={`group relative h-65 overflow-hidden rounded-2xl
                transform transition-all duration-1200 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >
              {/* IMAGE */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-2000 ease-out group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#271200] via-[#c98b55]/30 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <div className="p-7">
                  <p className="mb-1 text-xs tracking-widest text-[#c98b55] font-serif">
                    {item.tag}
                  </p>
                  <h3 className="text-lg font-medium text-white font-sans-400">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
