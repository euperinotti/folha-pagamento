import { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return (
    <div className="w-full flex flex-col items-center content-center">
      {children}
    </div>
  )
}
