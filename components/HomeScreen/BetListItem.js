import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import theme from '../Theme';

function BetListItem({ item: { betID, title, img } }) {
  const { navigate } = useNavigation();

  const navigateToBetScreen = () => {
    const params = { betID };
    navigate('BetScreen', params);
  };

  return (
    <Pressable style={styles.itemContainer} onPress={navigateToBetScreen}>
      <Image source={img} style={styles.img} />
      <View style={styles.textSide}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: ({ pressed }) => ({
    height: RFPercentage(15),
    flexDirection: 'row',
    borderRadius: RFPercentage(2),
    marginBottom: '5%',
    overflow: 'hidden',
    backgroundColor: pressed
      ? theme.palette.grey.main
      : theme.palette.grey.light,
  }),
  img: {
    width: '30%',
    height: '100%',
  },
  textSide: {
    width: '70%',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  text: {
    color: theme.palette.grey.dark,
    fontSize: theme.typography.fontSize.medium,
    fontFamily: 'Lato-Regular',
  },
});

export default BetListItem;
