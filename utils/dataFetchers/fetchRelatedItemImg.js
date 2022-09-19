import staticImages from './staticImageCache';

async function fetchRelatedItemImg(betID, picID) {
  // simulate network request delay
  await new Promise((res) => {
    setTimeout(res, 500);
  });
  return staticImages[betID].related[picID];
}
export default fetchRelatedItemImg;
