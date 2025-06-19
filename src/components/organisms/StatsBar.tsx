import Stat from '../atoms/Stat';

type StatsBarProps = {
  stats: {
    value: string
    label: string
  }[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="w-full bg-[var(--button-secondary)] my-6 sm:my-8 md:my-10 px-4 py-6 sm:py-8 md:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4">
          {stats.map((stat, index) => (
            <Stat 
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 