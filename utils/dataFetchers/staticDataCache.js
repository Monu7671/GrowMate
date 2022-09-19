/* This is a workaround for static loads in react-native.
When moving the app to use remote DB, this will be removed */
const staticDataCache = {
  chinaTaiwan01: {
    betData: require('../../assets/BetsData/chinaTaiwan01/data.json'),
    commentData: require('../../assets/BetsData/chinaTaiwan01/comments/data.json'),
    relatedData: require('../../assets/BetsData/chinaTaiwan01/related/data.json'),
  },
};

export default staticDataCache;
