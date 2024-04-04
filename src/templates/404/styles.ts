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
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacings.small};
  text-align: center;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-size: ${theme.font.sizes.xlarge};
  font-weight: ${theme.font.bold};
  font-family: ${theme.font.family.heebo};
  width: 100%;
  margin-bottom: ${theme.spacings.xxsmall};
`

export const SubHeading = styled.h2`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.normal};
  font-family: ${theme.font.family.heebo};
  width: 100%;
  margin-bottom: ${theme.spacings.xxsmall};
`
