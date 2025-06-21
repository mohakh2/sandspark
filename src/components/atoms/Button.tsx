'use client'

import Link from "next/link"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'navbar' | 'contact'
  children: React.ReactNode
  href?: string
}

export default function Button({
  variant = 'primary',
  children,
  href,
  className: customClassName,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md  hover:text-decoration-line:none"
  const variantStyles = {
    primary: "text-white bg-[var(--button-primary)]",
    secondary: "text-white bg-[var(--button-secondary)]",
    navbar: "text-black",
    contact: "text-white bg-[var(--button-primary)] w-[200px] text-center text-lg font-bold"
  }
  
  const className = `${baseStyles} ${variantStyles[variant]} ${customClassName || ''}`
  
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
} 