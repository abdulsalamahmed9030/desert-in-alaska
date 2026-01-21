import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex items-center bg-[#432719] text-white text-sm px-6 py-2 justify-around">
      {/* Left */}
      <div className="flex items-center gap-6">
  <a
    href="tel:13139313070"
    className="flex items-center gap-2"
  >
    <Phone size={14} />
    <span>313-931-3070</span>
  </a>

  <a
    href="mailto:desertinalaska@outlook.com"
    className="flex items-center gap-2"
  >
    <Mail size={14} />
    <span>desertinalaska@outlook.com</span>
  </a>
</div>


      {/* Right */}
      <div>
        Mon – Sat, 8:00 AM – 6:00 PM
      </div>
    </div>
  );
}
