import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#432719] text-[#f5efe9]">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-4 py-20 grid gap-16 lg:grid-cols-4">
        {/* BRAND */}
        <div className="space-y-6">
          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="Desert In Alaska"
            width={200}
            height={140}
            className="w-56 md:w-64 lg:w-62 h-auto"
          />

          <p className="text-sm leading-relaxed text-[#e7d6c8] max-w-sm font-serif">
            Trusted commercial fire suppression and mechanical services since
            1997. Licensed, certified, and committed to safety excellence.
          </p>

          <div className="flex gap-6 pt-4 text-xs text-[#c98b55]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} />
              <span>Certified Experts</span>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="mb-6 text-lg font-medium font-sans">Quick Links</h4>
          <ul className="space-y-3 text-sm text-[#e7d6c8] font-serif">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-6 text-lg font-medium font-sans">Our Services</h4>
          <ul className="space-y-3 text-sm text-[#e7d6c8] font-serif">
            <li>Fire Suppression Systems</li>
            <li>Commercial HVAC</li>
            <li>Kitchen Exhaust Systems</li>
            <li>Gas Piping</li>
            <li>Fire Extinguisher Sales</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-6 text-lg font-medium font-sans">Contact Us</h4>
          <ul className="space-y-4 text-sm text-[#e7d6c8] font-serif">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-[#c98b55]" />
              <span>
                11402 Schaefer Hwy
                <br />
                Detroit, MI 48227
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#c98b55]" />
              <span>313-931-3070</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#c98b55]" />
              <span>desertinalaska@outlook.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-[#c98b55]" />
              <span>Mon – Sat, 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 font-serif">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-[#d8c2b1]">
          <p>© 2026 Desert In Alaska Corp. All rights reserved.</p>
          <p>www.desertinalaska.com</p>
        </div>
      </div>
    </footer>
  );
}
