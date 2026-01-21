"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Desert in Alaska"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2 font-serif">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${
                    isActive(link.href)
                      ? "bg-[#86492D]/10 text-accent"
                      : "text-accent hover:bg-[#86492D]/10"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 rounded-md bg-[#9b5d2e] px-5 py-2 text-sm font-semibold text-white hover:bg-[#86522d] transition"
            >
              Get a Quote
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden font-serif"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
     {/* MOBILE MENU */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 ${
    open ? "max-h-96" : "max-h-0"
  }`}
>
  <div className="border-t border-black/10 bg-white px-6 py-6 font-serif">
    <div className="flex flex-col gap-3">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className={`rounded-md px-4 py-2 text-base font-medium transition-colors
            ${
              isActive(link.href)
                ? "bg-[#86492D]/10"
                : "hover:bg-[#86492D]/10"
            }
          `}
        >
          {link.name}
        </Link>
      ))}

      <Link
        href="/quote"
        onClick={() => setOpen(false)}
        className="mt-3 inline-flex w-fit rounded-md bg-[#9b5d2e] px-5 py-2 text-sm font-semibold text-white"
      >
        Get a Quote
      </Link>

      {/* CONTACT INFO */}
      <div className="mt-6 border-t border-black/10 pt-4 text-sm text-[#432719]">
        <a
          href="tel:13139313070"
          className="flex items-center gap-3 py-2"
        >
          <span className="font-medium">📞</span>
          313-931-3070
        </a>

        <a
          href="mailto:desertinalaska@outlook.com"
          className="flex items-center gap-3 py-2"
        >
          <span className="font-medium">✉️</span>
          desertinalaska@outlook.com
        </a>
      </div>
    </div>
  </div>
</div>

    </header>
  );
}
