import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../Theme';

function ActionButtons({ bidPrice }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.bidPriceContainer, marginRight: 15 }}>
        <Text style={styles.bidPrice}>${bidPrice.yes}</Text>
        <StyledButton color="tertiary">Yes</StyledButton>
      </View>
      <View style={styles.bidPriceContainer}>
        <Text style={styles.bidPrice}>${bidPrice.no}</Text>
        <StyledButton color="primary">No</StyledButton>
      </View>
    </View>
  );
}

function StyledButton({ color, children, style: additionalStyles }) {
  return (
    <View
      style={{
        ...styles.btn,
        backgroundColor: theme.palette[color].main,
        ...additionalStyles,
      }}
    >
      <Text
        style={{ ...styles.text, color: theme.palette[color].contrastText }}
      >
        {children}
      </Text>
    </View>
  );
}

export default ActionButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  bidPriceContainer: {
    alignItems: 'center',
  },
  bidPrice: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginBottom: 5,
  },
  btn: {
    width: 60,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});
