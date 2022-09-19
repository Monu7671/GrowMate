import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from '../../../../../icons/Icon';
import theme from '../../../../../Theme';

function CommentInput() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Add a comment" styles={styles.input} />
      <View style={styles.quickReplies}>
        <Text style={styles.replyEmoji}>😍</Text>
        <Text style={styles.replyEmoji}>😭</Text>
        <Icon
          style={styles.replyEmoji}
          symbol="plusInCircle"
          color={theme.palette.grey.main}
          scale={2}
        />
      </View>
    </View>
  );
}

export default CommentInput;

const styles = StyleSheet.create({
  container: {
    marginLeft: '15%',
    marginRight: '5%',
    marginTop: 5,
  },
  quickReplies: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  replyEmoji: {
    marginRight: 10,
  },
});
