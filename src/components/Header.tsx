"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO ONLY */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"   // put your logo here
              alt="Desert in Alaska"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* DESKTOP NAV (>=1024px) */}
          <nav className="hidden lg:flex items-center gap-8 font-serif">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-black hover:text-[#9b5d2e] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/quote"
              className="rounded-md bg-[#9b5d2e] px-5 py-2 text-sm font-semibold text-white hover:bg-[#864f26] transition"
            >
              Get a Quote
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON (<1024px) */}
          <button
            className="lg:hidden font-serif"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (<1024px) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-black/10 bg-white px-6 py-6 font-serif">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-black"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-md bg-[#9b5d2e] px-5 py-2 text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
