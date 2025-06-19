'use client'

import Image from 'next/image'
import Heading from '../atoms/Heading'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="w-full sm:w-[280px] bg-[#ECEFF1] rounded-xl sm:rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 mb-6 sm:mb-0">
      <div className="h-10 sm:h-12 bg-[#607D8B] flex items-center">
        <div className="w-3 h-3 sm:w-4 sm:h-4 ml-3 sm:ml-4 rounded-full bg-[#FFB74C]"></div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col items-center">
        <Image src={icon} alt={title} width={50} height={50} className="mb-3 sm:mb-4 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
        <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-center">{title}</h3>
        <p className="text-xs sm:text-sm text-center">{description}</p>
      </div>
    </div>
  )
}

type FeatureShowcaseProps = {
  title: string
  features: FeatureCardProps[]
}

export default function FeatureShowcase({ title, features }: FeatureShowcaseProps) {
  return (
    <section className="py-10 sm:py-16 w-full px-4" id="about">
      <div className="container mx-auto">
        <Heading size="md" className="text-center mb-6 sm:mb-12">{title}</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 