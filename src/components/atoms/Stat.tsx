type StatProps = {
  value: string
  label: string
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
      <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{value}</span>
      <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-2 sm:mt-0 sm:ml-3 md:ml-6 lg:ml-10 max-w-[200px] sm:max-w-none">
        {label}
      </span>
    </div>
  )
} 