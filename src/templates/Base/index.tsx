import { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return <div className="text-3xl font-bold underline">{children}</div>
}
