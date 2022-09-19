import { RFPercentage } from 'react-native-responsive-fontsize';

const theme = {
  palette: {
    primary: {
      light: '#C930C5',
      main: '#E432C1',
      contrastText: 'white',
    },
    secondary: {
      main: '#2E20DB',
      contrastText: 'white',
    },
    tertiary: {
      main: '#21FFAA',
      contrastText: 'black',
    },
    grey: {
      light: '#D9D9D9',
      main: '#687684',
      dark: '#2e2e2e',
    },
    white: {
      main: '#F8F8F8',
    },
    blue: {
      main: '#1A73FD',
    },
    withOpacity(color, opacity) {
      const opacityInHex = (opacity * 255).toString(16).split('.')[0];
      return `${color}${opacityInHex}`;
    },
  },
  typography: {
    fontSize: {
      small: RFPercentage(1.9),
      medium: RFPercentage(2),
      large: RFPercentage(2.5),
    },
  },
};

export default theme;
