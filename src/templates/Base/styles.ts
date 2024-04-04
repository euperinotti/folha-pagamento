import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacings.small};
`
