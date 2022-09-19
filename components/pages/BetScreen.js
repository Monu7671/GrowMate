import { Suspense } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useResource } from '../../utils/CustomHooks/useResource';
import BetImg, { BetImgFallback } from '../BetScreen/BetImg';
import BetInfo, { BetInfoFallback } from '../BetScreen/BetInfo';
import BetScreenContextProvider from '../BetScreen/BetScreenContext';
import fetchBetScreenData from '../BetScreen/fetchBetScreenData';

function BetScreen({ route }) {
  const { betID } = route.params;

  const betScreenDataResource = useResource(
    fetchBetScreenData.bind(null, betID),
    []
  );

  return (
    <BetScreenContextProvider betID={betID}>
      <SafeAreaView style={{ height: '100%' }}>
        <Suspense fallback={<BetImgFallback />}>
          <BetImg betDataResource={betScreenDataResource} />
        </Suspense>
        <Suspense fallback={<BetInfoFallback />}>
          <BetInfo betDataResource={betScreenDataResource} />
        </Suspense>
      </SafeAreaView>
    </BetScreenContextProvider>
  );
}

export default BetScreen;
