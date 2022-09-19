import { ActivityIndicator, FlatList, View } from 'react-native';
import theme from '../Theme';
import BetListItem from './BetListItem';

function BetList({ betListResource }) {
  const betList = betListResource.read();

  return (
    <FlatList
      data={betList}
      renderItem={({ item }) => <BetListItem item={item} />}
      keyExtractor={(item) => item.betID}
    />
  );
}

function BetListFallback() {
  return (
    <View style={{ flexGrow: 1, justifyContent: 'center' }}>
      <ActivityIndicator color={theme.palette.primary.main} size="large" />
    </View>
  );
}

export default BetList;
export { BetListFallback };
