import { StyleSheet, Text, View } from 'react-native';
import Icon from '../../../../../icons/Icon';
import theme from '../../../../../Theme';

function Overview({ data: { expertCount, commentCount } }) {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        symbol="idCard"
        scale={1.5}
        color={theme.palette.grey.main}
      />
      <Text style={styles.text}>{expertCount}</Text>
      <Icon
        style={styles.icon}
        symbol="chatBubble"
        scale={1.5}
        color={theme.palette.grey.main}
      />
      <Text style={styles.text}>{commentCount}</Text>
      <Icon
        style={styles.endIcon}
        symbol="chevronUpDown"
        scale={1.5}
        color={theme.palette.grey.main}
      />
    </View>
  );
}

export default Overview;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2.5%',
    marginLeft: '7.5%',
    marginRight: '2.5%',
  },
  text: {
    fontFamily: 'MA-Medium',
    color: theme.palette.grey.main,
    fontSize: 18,
    marginRight: 20,
  },
  icon: {
    marginRight: 5,
  },
  endIcon: {
    marginLeft: 'auto',
  },
});
