// app/fonts.ts
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";

export const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});
