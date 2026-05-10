import React, { useState } from "react";
import ContactModal from "./ContactModal";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
      <HeroSection setIsModalOpen={setIsModalOpen} />
      <FeaturesSection />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
