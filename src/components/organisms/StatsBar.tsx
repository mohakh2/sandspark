import Stat from '../atoms/Stat';

type StatsBarProps = {
  stats: {
    value: string
    label: string
  }[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="w-full h-[200px] bg-[var(--button-secondary)] my-8 flex justify-between items-center px-20">
      {stats.map((stat, index) => (
        <Stat 
          key={index}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  )
} 