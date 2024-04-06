import { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return (
    <div className="w-full h-dvh flex items-start content-center bg-slate-100 px-8 py-8 gap-10">
      {children}
    </div>
  )
}
