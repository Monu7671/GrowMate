import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '../Theme';
import Portfolio from './Portfolio/Portfolio';
import Tabs from './Tabs/Tabs';

function BetInfo({ betDataResource }) {
  const { portfolio, tabs } = betDataResource.read();

  return (
    <View style={styles.container}>
      <Portfolio data={portfolio} />
      <Tabs data={tabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '70%',
  },
});

function BetInfoFallback() {
  return (
    <View style={fallbackStyles.container}>
      <ActivityIndicator size="large" color={theme.palette.primary.main} />
    </View>
  );
}

const fallbackStyles = StyleSheet.create({
  container: {
    height: '70%',
    justifyContent: 'center',
  },
});

export default BetInfo;
export { BetInfoFallback };
