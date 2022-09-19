import { StyleSheet, View } from 'react-native';
import Icon from './icons/Icon';
import theme from './Theme';

function Navbar() {
  return (
    <View style={styles.container}>
      <NavbarButton symbol="feed" selected />
      <NavbarButton symbol="markets" />
      <NavbarButton symbol="portfolio" />
      <NavbarButton symbol="profile" />
    </View>
  );
}

function NavbarButton({ symbol, selected }) {
  return (
    <View
      style={{
        backgroundColor: selected && theme.palette.primary.main,
        borderRadius: 1e6,
        paddingHorizontal: 10,
        marginVertical: '2.5%',
      }}
    >
      <Icon symbol={symbol} />
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
