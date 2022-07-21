import { createTheme } from "@nextui-org/react"

export const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      background: 'red',
      backgroundColor: 'red',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
            background: 'blue',
      backgroundColor: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd',
      // ...  more colors
            primary: '$white',
    },
    space: {},
    fonts: {}
  }
})