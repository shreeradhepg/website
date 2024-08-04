// pages.tsx

import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your project structure
import Hero from "@/components/Hero";
import AboutPage from "@/components/AboutPage";
import Facilities from "@/components/Facilities";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Accommodation from "@/components/Accomodation";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";

const Pages: React.FC = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="amenities">
        <Facilities />
      </section>
      <section id="rooms">
        <Accommodation />
      </section>
      <section id="location">
        <Contact />
      </section>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Pages;
