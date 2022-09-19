import { StyleSheet, Text, View } from 'react-native';
import { Suspense } from 'react';
import { useResource } from '../../../../../../utils/CustomHooks/useResource';
import AuthorDP, { AuthorDPFallback, getAuthorDP } from './AuthorDP';
import Icon from '../../../../../icons/Icon';
import theme from '../../../../../Theme';

function Comment({
  truncate,
  data: { dpColor, authorID, author, content, replies },
}) {
  const authorDPResource = useResource(getAuthorDP.bind(null, authorID), []);

  return (
    <View
      style={{
        ...styles.commentContainer,
        ...{
          alignItems: truncate ? 'center' : 'flex-start',
        },
      }}
    >
      <Suspense fallback={<AuthorDPFallback />}>
        <AuthorDP color={dpColor} authorDPResource={authorDPResource} />
      </Suspense>
      <View style={styles.rightSide}>
        <Text numberOfLines={truncate ? 2 : undefined}>
          <Text style={styles.author}>{author}</Text>{' '}
          <Text style={styles.content}>{content}</Text>
        </Text>
        {!truncate && <CommentActions replyCount={replies} />}
      </View>
    </View>
  );
}

function CommentActions({ replyCount }) {
  return (
    <View style={commentActionsStyles.container}>
      <View style={commentActionsStyles.iconContainer}>
        <ActionIcon symbol="likeOutline" />
        <ActionIcon symbol="dislikeOutline" />
        <ActionIcon symbol="heartInBubble" />
      </View>
      {replyCount && (
        <Text style={commentActionsStyles.replyCount}>
          {replyCount} Replies
        </Text>
      )}
    </View>
  );
}

function ActionIcon({ symbol }) {
  return (
    <Icon
      symbol={symbol}
      scale={1.5}
      color={theme.palette.grey.main}
      style={{ marginRight: 10 }}
    />
  );
}

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    marginBottom: '2.5%',
  },
  rightSide: { flex: 1 },
  author: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
  },
  content: { fontFamily: 'Lato-Regular', fontSize: 13 },
});

const commentActionsStyles = StyleSheet.create({
  container: {},
  iconContainer: {
    flexDirection: 'row',
    marginVertical: '2.5%',
  },
  replyCount: {
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase',
    color: theme.palette.blue.main,
  },
});
