import AboutPage from "@/components/AboutPage";

import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurJourney from "@/components/OurJourney";
import OurStory from "@/components/OurStory";
import OurValues from "@/components/OurValues";
import TopBar from "@/components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <AboutPage />
 <OurStory />
 <OurValues />
 <OurJourney />
      <Certifications />
      <Footer />
    </>
  );
};

export default page;
