type HeadingProps = {
  children: React.ReactNode
  size?: 'xl' | 'lg' | 'md'
  highlight?: boolean
  className?: string
}

export default function Heading({
  children,
  size = 'lg',
  highlight = false,
  className = ''
}: HeadingProps) {
  const sizeStyles = {
    xl: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
    lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    md: 'text-xl sm:text-2xl'
  }
  
  const textColor = highlight ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'
  const fontWeight = 'font-bold'
  
  return (
    <p className={`${fontWeight} ${textColor} ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  )
} 