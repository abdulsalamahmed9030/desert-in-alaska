import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TopBar from "@/components/TopBar";

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <ContactBar />
      <Services />
      <AboutUs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
