import staticImages from './staticImageCache';

// Eventually change this to point to a remote DB, that contains the images
async function fetchBetImg(betID) {
  // simulate network request delay
  await new Promise((res) => {
    setTimeout(res, 500);
  });
  return staticImages[betID].bg;
}

export default fetchBetImg;
