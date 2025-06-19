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
    <div className="w-[280px] bg-[#ECEFF1] rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1">
      <div className="h-12 bg-[#607D8B] flex items-center">
        <div className="w-4 h-4 ml-4 rounded-full bg-[#FFB74C]"></div>
      </div>
      <div className="p-6 flex flex-col items-center">
        <Image src={icon} alt={title} width={60} height={60} className="mb-4" />
        <h3 className="text-lg font-bold mb-3 text-center">{title}</h3>
        <p className="text-sm text-center">{description}</p>
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
    <section className="py-16  w-full">
      <div className="container mx-auto">
        <Heading size="md" className="text-center mb-12">{title}</Heading>
        <div className="flex flex-wrap justify-center gap-8">
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