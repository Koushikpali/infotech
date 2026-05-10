import React from "react";
import vector2Img from "../assets/Vector2.png";
import section2Img from "../assets/Section2-Image.png";
import icon1 from "../assets/Regulatory Clarity.png";
import icon2 from "../assets/Hassle-Free Filings Clarity.png";
import icon3 from "../assets/Risk Protection.png";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="relative lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Why <span className="text-indigo-600">Compliance Matters</span><br />
              For Research <span className="relative inline-block">
                Analysts
          
                <img src={vector2Img} alt="Arrow" className="absolute -right-[320px]  top-[200px] md:-right-6  md:top-16 " />
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2 pt-2">
            <p className="text-base text-slate-700 leading-relaxed font-medium capitalize">
              In Today's Regulatory Environment, Even A Small Oversight Can Lead
              To Penalties, Reputational Risks, And Loss Of Client Trust. We
              Help Research Analysts And Firms Navigate Complex Compliance Requirements So They Can Focus On Delivering High-Quality Research Without Worry.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-[55%] w-full">
            <img src={section2Img} alt="Section 2 Image" className="w-full h-auto object-contain pr-4" />
          </div>
          
          <div className="lg:w-[45%] w-full flex flex-col gap-6">
            {[
              {
                icon: <img src={icon1} alt="Regulatory Clarity" className="w-12 h-12 object-contain" />,
                title: "Regulatory Clarity",
                desc: "We Decode Complex Compliance Rules Into Simple, Actionable Steps.",
              },
              {
                icon: <img src={icon2} alt="Hassle-Free Filings" className="w-12 h-12 object-contain" />,
                title: "Hassle-Free Filings Clarity",
                desc: "From Registration To Ongoing Reporting—We Manage It End-To-End.",
              },
              {
                icon: <img src={icon3} alt="Risk Protection" className="w-12 h-12 object-contain" />,
                title: "Risk Protection",
                desc: "Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-slate-200 flex flex-row items-start gap-5 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[13px] font-medium">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
