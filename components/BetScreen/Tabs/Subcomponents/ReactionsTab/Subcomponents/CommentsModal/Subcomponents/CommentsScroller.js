import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import staticDataCache from '../../../../../../../../utils/dataFetchers/staticDataCache';
import theme from '../../../../../../../Theme';
import Comment from '../../Comment';

function CommentsScroller({ dataResource }) {
  const data = dataResource.read();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ commentID }) => commentID}
        renderItem={({ item }) => <Comment data={item} />}
        style={styles.scroller}
      />
    </View>
  );
}

function CommentsScrollerFallback() {
  return (
    <View style={fallbackStyles.container}>
      <ActivityIndicator size="large" color={theme.palette.primary.main} />
    </View>
  );
}

async function getAllComments(betID) {
  // simulate network delay
  await new Promise((res) => {
    setTimeout(res, 500);
  });

  return staticDataCache[betID].commentData;
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    flex: 1,
    marginHorizontal: '5%',
  },
});

const fallbackStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommentsScroller;
export { CommentsScrollerFallback, getAllComments };
