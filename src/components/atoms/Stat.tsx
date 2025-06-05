type StatProps = {
  value: string
  label: string
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="flex items-center ">
      <span className="text-white text-7xl font-bold text-left ">{value}</span>
      <span className="text-white text-2xl font-bold text-left ml-10">
        {label}
      </span>
    </div>
  )
} 