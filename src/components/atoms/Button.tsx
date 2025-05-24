'use client'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  children,
  href,
  onClick
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md text-white hover:text-decoration-line:none"
  const variantStyles = {
    primary: "bg-[var(--button-primary)]",
    secondary: "bg-[var(--button-secondary)]"
  }
  
  const className = `${baseStyles} ${variantStyles[variant]}`
  
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
} 