import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../../../Theme';

function Bubble({ children }) {
  return (
    <View style={{ ...styles.circle, ...styles.container }}>
      <View style={{ ...styles.circle, ...styles.innerContainer }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

export default Bubble;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: theme.palette.withOpacity(
      theme.palette.primary.light,
      0.1
    ),
    borderRadius: 1e6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '30%',
    aspectRatio: 1,
  },
  innerContainer: {
    height: '80%',
    width: '80%',
  },
  text: {
    fontFamily: 'Lato-Black',
    fontSize: 15,
    color: theme.palette.primary.main,
  },
});
