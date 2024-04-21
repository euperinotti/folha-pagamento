import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title: string
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className="bg-slate-50 border border-slate-300 py-4 px-4 rounded-md">
      <h2 className="text-green-600 mb-4">{title}</h2>
      {children}
    </div>
  )
}
