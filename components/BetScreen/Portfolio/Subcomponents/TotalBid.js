import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../Theme';

function TotalBid({ totalBid: { amount, duration } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{duration}</Text>
      <Text style={styles.text}>+{amount}</Text>
    </View>
  );
}

export default TotalBid;

const styles = StyleSheet.create({
  container: { alignItems: 'flex-end', alignSelf: 'flex-end' },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: theme.palette.primary.contrastText,
  },
});
