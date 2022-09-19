import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../../../Theme';
import CommentInput from './Subcomponents/CommentInput';
import CommentsModal from './Subcomponents/CommentsModal/CommentsModal';
import CommentsPreview from './Subcomponents/CommentsPreview';
import Overview from './Subcomponents/Overview';

function ReactionsTab({ data: { overview, comments } }) {
  const [showMoreComments, setShowMoreComments] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowMoreComments(true)}>
        <Overview data={overview} />
        <CommentsPreview data={comments} />
      </Pressable>
      <CommentInput />
      <CommentsModal
        onClose={() => setShowMoreComments(false)}
        visible={showMoreComments}
      />
    </View>
  );
}

export default ReactionsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.main,
  },
});
