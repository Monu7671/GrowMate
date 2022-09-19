import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import Icon from '../../icons/Icon';
import theme from '../../Theme';
import ActionButtons from './Subcomponents/ActionButtons';
import Chance from './Subcomponents/Chance';
import TotalBid from './Subcomponents/TotalBid';

function Portfolio({ data: { chance, increasing, totalBid, bidPrice } }) {
  return (
    <LinearGradient
      colors={[theme.palette.secondary.main, theme.palette.primary.main]}
      style={styles.container}
    >
      <Chance chance={chance} />
      <Icon
        symbol="arrowUp"
        scale={1.5}
        color={increasing ? theme.palette.tertiary.main : 'red'}
        style={{ transform: [{ rotateZ: increasing ? '0deg' : '180deg' }] }}
      />
      <TotalBid totalBid={totalBid} />
      <ActionButtons bidPrice={bidPrice} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: '5%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default Portfolio;
