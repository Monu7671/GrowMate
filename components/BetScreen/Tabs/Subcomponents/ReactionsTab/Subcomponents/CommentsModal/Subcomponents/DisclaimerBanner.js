import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../../../../../Theme';

function DisclaimerBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Remember to keep comments respectful and to follow our{' '}
        <Text style={{ ...styles.text, ...styles.hyperlink }}>
          Community Guidelines
        </Text>
      </Text>
    </View>
  );
}

export default DisclaimerBanner;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2.5%',
    paddingHorizontal: '5%',
    backgroundColor: theme.palette.white.main,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
  },
  hyperlink: {
    color: theme.palette.blue.main,
  },
});
