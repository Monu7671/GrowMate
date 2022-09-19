/* This is a workaround for static loads in react-native.
When moving the app to use remote DB, this will be removed */
const staticImages = {
  chinaTaiwan01: {
    bg: require('../../assets/BetsData/chinaTaiwan01/BG.png'),
    related: {
      liz01: require('../../assets/BetsData/chinaTaiwan01/related/pics/liz01.png'),
      pmElec01: require('../../assets/BetsData/chinaTaiwan01/related/pics/pmElec01.png'),
      railway01: require('../../assets/BetsData/chinaTaiwan01/related/pics/railway01.png'),
    },
  },
};
export default staticImages;
