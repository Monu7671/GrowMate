import { Image, StyleSheet, TextInput, View } from 'react-native';
import Icon from '../../../../../../../icons/Icon';
import theme from '../../../../../../../Theme';

function ModalCommentInput() {
  return (
    <View style={styles.container}>
      {/* We don't fetch this from remote, as it is assumed that userDP is stored in app cache */}
      <Image
        source={require('../../../../../../../../assets/UserDP.png')}
        style={styles.userDP}
      />
      <TextInput placeholder="Add a comment" styles={styles.input} />
      <View style={styles.quickReplies}>
        <Icon
          style={styles.replyEmoji}
          symbol="plusInCircle"
          color={theme.palette.grey.main}
          scale={1.5}
        />
      </View>
    </View>
  );
}

export default ModalCommentInput;

const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDP: {
    height: 40,
    width: 40,
    marginRight: '10%',
    resizeMode: 'contain',
  },
  quickReplies: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  replyEmoji: {
    marginRight: 10,
  },
});
