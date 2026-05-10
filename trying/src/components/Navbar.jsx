import React from "react";
import { Menu } from "lucide-react";
import logoImg from "../Assets/Logo.png";

export default function Navbar({ isMenuOpen, setIsMenuOpen, setIsModalOpen }) {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="rounded-xl " />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-indigo-600">
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
