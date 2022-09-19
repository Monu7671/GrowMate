import { Suspense } from 'react';
import { StyleSheet, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useResource } from '../../utils/CustomHooks/useResource';
import BetList, { BetListFallback } from '../HomeScreen/BetList';
import fetchBetList from '../HomeScreen/fetchBetList';

function HomeScreen() {
  const betListResource = useResource(fetchBetList, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Home</Text>
      <Suspense fallback={<BetListFallback />}>
        <BetList betListResource={betListResource} />
      </Suspense>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    height: '100%',
  },
  h1: {
    fontSize: RFPercentage(5),
    fontFamily: 'Lato-Bold',
    marginVertical: RFPercentage(1),
  },
});

export default HomeScreen;
