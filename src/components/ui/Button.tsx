import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  // ...props passes onClick, aria-label, children and every other button prop through
  return <button type="button" className={`btn btn-${variant} ${className}`} {...props} />
}
