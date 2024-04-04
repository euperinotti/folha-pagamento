import { ReactNode } from 'react'
import * as S from './styles'

type BaseProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseProps) => {
  return <S.Container>{children}</S.Container>
}
