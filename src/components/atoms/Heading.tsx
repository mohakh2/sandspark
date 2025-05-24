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
    xl: 'text-8xl',
    lg: 'text-7xl',
    md: 'text-2xl'
  }
  
  const textColor = highlight ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'
  const fontWeight = 'font-bold'
  
  return (
    <p className={`${fontWeight} ${textColor} ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  )
} 