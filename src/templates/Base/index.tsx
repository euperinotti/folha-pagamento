import { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return <div>{children}</div>
}
