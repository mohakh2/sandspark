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
    <div className="relative w-full overflow-hidden">
      <div className="bg-[#FFB74C] rounded-3xl p-8 pb-12 shadow-lg relative w-full">
               
        <div className="text-center mb-10">
          <Heading size="md" className="text-3xl font-bold text-gray-800">
            {title}
          </Heading>
          <p className="text-gray-700 mt-2">{subtitle}</p>
        </div>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-amber-100 rounded-xl px-6 py-4 shadow-md border border-amber-300"
            >
              <p className="text-gray-800">
                <span className="font-bold">{step.number}. {step.title}</span> — {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 