import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../Theme';

function Chance({ chance }) {
  return (
    <View>
      <Text style={styles.chanceText}>Chance</Text>
      <Text style={styles.chancePerc}>{chance * 100}%</Text>
    </View>
  );
}

export default Chance;

const styles = StyleSheet.create({
  chanceText: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  chancePerc: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'MA-Bold',
    fontSize: 30,
  },
});
