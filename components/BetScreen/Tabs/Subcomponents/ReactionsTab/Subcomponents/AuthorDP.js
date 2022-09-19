import { Image, StyleSheet, View } from 'react-native';
import staticDPCache from '../../../../../../utils/dataFetchers/staticDPCache';
import theme from '../../../../../Theme';

function AuthorDP({ color, authorDPResource }) {
  const authorDP = authorDPResource.read();
  return (
    <View style={{ ...styles.outer, borderColor: theme.palette[color].main }}>
      <Image source={authorDP} style={styles.inner} />
    </View>
  );
}

function AuthorDPFallback() {
  return (
    <View style={fallbackStyles.outer}>
      <View style={fallbackStyles.inner} />
    </View>
  );
}

async function getAuthorDP(authorID) {
  // simulate network request
  await new Promise((res) => {
    setTimeout(res, 500);
  });

  return staticDPCache[authorID];
}

export default AuthorDP;
export { AuthorDPFallback, getAuthorDP };

const styles = StyleSheet.create({
  outer: {
    height: 34,
    aspectRatio: 1,
    borderRadius: 1e6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2.5%',
  },
  inner: {
    height: '80%',
    aspectRatio: 1,
    borderRadius: 1e6,
  },
});
const fallbackStyles = StyleSheet.create({
  outer: { ...styles.outer, borderColor: theme.palette.grey.main },
  inner: { ...styles.inner, backgroundColor: theme.palette.grey.light },
});
