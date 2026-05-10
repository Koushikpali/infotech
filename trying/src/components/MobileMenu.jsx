import React from "react";
import { X } from "lucide-react";
import logoImg from "../assets/Logo.png";
import homeImg from "../assets/Home.png";
import aboutImg from "../assets/AboutUs.png";
import servicesImg from "../assets/Our Services.png";
import pricingImg from "../assets/Pricing.png";
import faqImg from "../assets/FAQ.png";
import contactImg from "../assets/Contact.png";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, setIsModalOpen }) {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={() => setIsMenuOpen(false)}
      ></div>
      
      {/* Drawer */}
      <div className="relative w-80 max-w-full bg-slate-50 h-full flex flex-col shadow-xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-4 py-4 flex justify-between items-center shadow-sm bg-slate-50">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Logo" className="h-8" />
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-1">
            <X className="w-8 h-8 text-indigo-600" />
          </button>
        </div>
        
        {/* Links */}
        <div className="px-6 pt-12 pb-6 flex flex-col gap-9 overflow-y-auto h-full">
          {[
            { name: 'Home', active: true, icon: homeImg },
            { name: 'About Us', active: false, icon: aboutImg },
            { name: 'Our Services', active: false, icon: servicesImg },
            { name: 'Pricing', active: false, icon: pricingImg },
            { name: 'FAQ', active: false, icon: faqImg },
            { name: 'Contact', active: false, icon: contactImg }
          ].map((item, i) => (
            <a key={i} href="#" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-6 text-lg font-medium transition-colors ${item.active ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>
              <div className="w-6 h-6 flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
              {item.name}
            </a>
          ))}
          
          <button 
            onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}
            className="mt-4 w-full h-11 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
