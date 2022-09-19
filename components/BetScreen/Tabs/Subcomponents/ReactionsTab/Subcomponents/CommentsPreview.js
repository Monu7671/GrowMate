import { StyleSheet, View } from 'react-native';
import Comment from './Comment';

function CommentsPreview({ data }) {
  return (
    <View style={styles.previewContainer}>
      {data.map((commentData) => (
        <Comment truncate data={commentData} key={commentData.authorID} />
      ))}
    </View>
  );
}

export default CommentsPreview;

const styles = StyleSheet.create({
  previewContainer: {
    marginHorizontal: '5%',
  },
});
