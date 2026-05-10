import React from "react";
import heroImg from "../assets/Banner Image.png";
import underlineImg from "../assets/underline-Vector.png";
import checkSignImg from "../assets/check-sign.png";

export default function HeroSection({ setIsModalOpen }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-16 items-center">
        <div className="flex flex-col items-start space-y-8 relative z-10 w-[606px] h-[606px] ">
          <h1 className="w-[606px] text-5xl md:text-6xl font-extrabold text-slate-900  leading-[75px] tracking-tight">
            Simplifying{" "}
            <span className="inline-flex flex-col w-fit">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Compliance
              </span>
              <img
                src={underlineImg}
                alt="underline"
                className="w-full mt-1"
              />
            </span>
      
            For Research Analysts
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            Stay focused on your insights—we'll handle the compliance. Our
            expert solutions ensure your research practices meet every
            regulatory requirement with confidence and ease.
          </p>

          <div className="space-y-4">
            {[
              "End-to-end compliance support",
              "Regulatory filings made simple",
              "Tailored solutions for independent analysts & firms",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <img src={checkSignImg} alt="check" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              Get Started
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-4 text-base font-semibold text-indigo-600 bg-transparent border-2 border-indigo-600 hover:bg-indigo-50 rounded-xl transition-all w-full sm:w-auto"
            >
              Book a Consultation
            </button>
          </div>
        </div>

        <div className="relative z-10  block w-[606px] h-[606px]">
          <img
            src={heroImg}
            alt="Compliance Illustration"
            className="w-full h-full object-contain drop-shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000"
          />
        </div>
      </div>
    </section>
  );
}
