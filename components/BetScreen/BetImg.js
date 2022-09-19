import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../Theme';
import Icon from '../icons/Icon';

function BetImg({ betDataResource }) {
  const { img, title } = betDataResource.read();
  return (
    <ImageBackground source={img} style={styles.container}>
      <LinearGradient
        colors={['transparent', '#1A1A1AE3']}
        style={styles.fadeOverlay}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Icon symbol="toggle" color="white" />
        </View>
        <Icon
          symbol="share"
          color="white"
          scale={1.2}
          style={styles.shareIcon}
        />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.3,
    width: '100%',
    position: 'relative',
  },
  fadeOverlay: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '5%',
    marginHorizontal: '5%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: theme.typography.fontSize.large,
  },
  shareIcon: {
    position: 'absolute',
    top: '5%',
    right: '2.5%',
  },
});

function BetImgFallback() {
  return (
    <View style={fallbackStyles.container}>
      <ActivityIndicator
        size="large"
        color={theme.palette.primary.contrastText}
        style={fallbackStyles.spinner}
      />
    </View>
  );
}

const fallbackStyles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    backgroundColor: theme.palette.grey.main,
  },
});

export default BetImg;
export { BetImgFallback };
