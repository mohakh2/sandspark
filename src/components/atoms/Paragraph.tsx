import { forwardRef } from 'react';

type ParagraphProps = {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  className?: string
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
  children,
  size = 'md',
  className = ''
}, ref) => {
  const sizeStyles = {
    lg: 'text-lg sm:text-xl md:text-2xl',
    md: 'text-sm sm:text-base',
    sm: 'text-xs sm:text-sm'
  }
  
  return (
    <p ref={ref} className={`text-black ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  )
})

Paragraph.displayName = 'Paragraph'

export default Paragraph 