import breakpoints from '@/styles/breakpoints'

const devices = {
  xs: `max-width: ${breakpoints.xs}`,
  sm: `max-width: ${breakpoints.sm}`,
  md: `max-width: ${breakpoints.md}`,
  lg: `max-width: ${breakpoints.lg}`,
  xl: `max-width: ${breakpoints.xl}`,
  '2xl': `max-width: ${breakpoints['2xl']}`
}

export default devices
