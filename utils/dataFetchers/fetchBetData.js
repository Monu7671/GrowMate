import staticDataCache from './staticDataCache';

// Eventually change this to point to a remote DB, that contains the images
async function fetchBetData(betID) {
  // simulate network request delay
  await new Promise((res) => {
    setTimeout(res, 500);
  });

  return staticDataCache[betID].betData;
}
export default fetchBetData;
