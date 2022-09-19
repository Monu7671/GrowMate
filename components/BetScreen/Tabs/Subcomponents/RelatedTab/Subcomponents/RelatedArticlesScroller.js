import { FlatList, StyleSheet } from 'react-native';
import staticDataCache from '../../../../../../utils/dataFetchers/staticDataCache';
import RelatedItem from './RelatedItem';

function RelatedArticlesScroller({ dataResource }) {
  const data = dataResource.read();
  return (
    <FlatList
      data={data}
      keyExtractor={({ articleId }) => articleId}
      renderItem={({ item }) => (
        <RelatedItem style={{ marginBottom: '5%' }} data={item} />
      )}
      style={styles.scroller}
    />
  );
}

async function getAllRelatedArticles(betID) {
  // simulate network delay
  await new Promise((res) => {
    setTimeout(res, 500);
  });

  return staticDataCache[betID].relatedData;
}

export default RelatedArticlesScroller;
export { getAllRelatedArticles };

const styles = StyleSheet.create({
  scroller: {
    marginHorizontal: '5%',
  },
});
