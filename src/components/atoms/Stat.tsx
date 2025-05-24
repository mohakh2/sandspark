type StatProps = {
  value: string
  label: string
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="flex items-center">
      <span className="text-white text-7xl font-bold">{value}</span>
      <span className="text-white text-2xl font-bold text-left">
        {label}
      </span>
    </div>
  )
} 