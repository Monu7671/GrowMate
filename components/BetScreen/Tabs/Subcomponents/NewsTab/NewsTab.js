import { ScrollView, StyleSheet, Text, View } from 'react-native';
import theme from '../../../../Theme';
import Bubble from './Subcomponents/Bubble';
import FeaturedCard from './Subcomponents/FeaturedCard';
import Graphs from './Subcomponents/Graphs';

function NewsTab({ data: { stats, featured } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{stats.count} Expert Opinion</Text>
      <Stats data={stats} />
      <Featured data={featured} />
    </View>
  );
}

function Stats({ data }) {
  return (
    <View style={styles.statsContainer}>
      <Bubble>{data.predictionPercentage.yes * 100}%</Bubble>
      <Graphs data={data.predictionPercentage} />
    </View>
  );
}

function Featured({ data }) {
  return (
    <ScrollView horizontal style={styles.featuredContainer}>
      {data.map((item) => (
        <FeaturedCard item={item} key={item.id} />
      ))}
    </ScrollView>
  );
}

export default NewsTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white.main,
    flex: 1,
  },
  heading: {
    color: theme.palette.grey.dark,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginHorizontal: '5%',
    marginVertical: '2.5%',
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  featuredContainer: {
    paddingVertical: '5%',
  },
});
