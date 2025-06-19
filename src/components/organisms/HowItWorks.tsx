import React from "react";
import Heading from "../atoms/Heading";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function HowItWorks({ title, subtitle, steps }: HowItWorksProps) {
  return (
    <section className="w-full px-4 py-8 sm:py-12" id="process">
      <div className="container mx-auto">
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div className="bg-[#FFB74C] rounded-xl sm:rounded-3xl p-5 sm:p-8 pb-8 sm:pb-12 shadow-lg relative">
            <div className="text-center mb-6 sm:mb-10">
              <Heading size="md" className="text-2xl sm:text-3xl font-bold text-gray-800">
                {title}
              </Heading>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">{subtitle}</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="bg-[#E9E9D8] rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-md border border-amber-300 max-w-[90%] sm:max-w-[80%]">
                    <p className="text-gray-800 text-sm sm:text-base">
                      <span className="font-bold">{step.number}. {step.title}</span> — {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 