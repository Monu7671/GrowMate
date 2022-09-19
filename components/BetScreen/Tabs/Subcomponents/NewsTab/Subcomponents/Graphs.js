import { StyleSheet, Text, View } from 'react-native';
import theme from '../../../../../Theme';

function Graphs({ data: { yes, no, nil } }) {
  return (
    <View style={styles.container}>
      <StatItem color="primary" percentage={yes}>
        Buy Yes
      </StatItem>
      <StatItem color="grey" percentage={no}>
        Buy No
      </StatItem>
      <StatItem color="grey" percentage={nil}>
        No Resolve
      </StatItem>
    </View>
  );
}

function StatItem({ color, percentage, children }) {
  return (
    <View style={styles.statItem}>
      <Bar color={color} percentage={percentage} />
      <Text style={{ ...styles.statText, color: theme.palette[color].main }}>
        {percentage * 100}% {children}
      </Text>
    </View>
  );
}

function Bar({ color, percentage }) {
  const percentageAsString = `${(percentage * 100).toString()}%`;
  return (
    <View
      style={{
        height: '50%',
        width: '50%',
        backgroundColor: theme.palette.grey.light,
        marginRight: '4%',
        flexDirection: 'row', // reactNative bug
        borderRadius: 1e6,
      }}
    >
      <View
        style={{
          backgroundColor: theme.palette[color].main,
          height: '100%',
          width: percentageAsString,
          borderRadius: 1e6,
        }}
      />
    </View>
  );
}

export default Graphs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: '5%',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontFamily: 'Lato-Bold',
  },
});
