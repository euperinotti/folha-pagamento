export default {
  misc: {
    safeZoneWidth: 'max-width: 1200px;',
    boxShadow:
      '-webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5); -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5); box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);',
    transform: 'scale(1.1)'
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: {
      inter: 'Inter',
      heebo: 'Heebo'
    },
    source:
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap',
    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 700,
    extraBold: 800,
    sizes: {
      xxsmall: '0.75rem', // 12px
      xsmall: '1rem', // 16px
      small: '1.4rem', // 22.4px
      medium: '1.6rem', // 25.6px
      large: '1.8rem', // 28.8px
      xlarge: '2.0rem', // 32px
      xxlarge: '2.8rem', // 44.8px
      bigHeading: '3.1rem', // 54px
      body: '1.1rem' // 19.2px
    }
  },
  colors: {
    purple: '#4A009F',
    lightPurple: '#8A33B3',
    darkPurple: '#2E144D',
    rose: '#CA66C6',
    pink: '#B333B1',
    pinkFluor: '#9B009B',
    white: '#F6F6F6',
    black: '#1A1A1A',
    grafiti: '#232323',
    lightGray: '#C0C0C0',
    darkGray: '#898989'
  },
  spacings: {
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.2s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
