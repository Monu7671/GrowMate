import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../../../../../Theme';

function Chips() {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.chip, ...styles.selected }}>Top</Text>
      <Text style={styles.chip}>Newest</Text>
    </View>
  );
}

export default Chips;

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    backgroundColor: theme.palette.grey.main,
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 1e6,
    marginRight: '2%',
  },
  selected: {
    backgroundColor: theme.palette.grey.dark,
  },
});
