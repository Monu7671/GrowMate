import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Icon from '../../../../../icons/Icon';
import theme from '../../../../../Theme';

function FeaturedCard({ item: { author, content, date } }) {
  return (
    <View style={styles.container}>
      <View style={styles.firstLine}>
        <Text style={styles.heading}>{author}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Icon color="black" scale={2} symbol="shareOutline" style={styles.icon} />
    </View>
  );
}

export default FeaturedCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.7,
    marginHorizontal: theme.typography.fontSize.small,
    paddingHorizontal: '2%',
    paddingVertical: '1.5%',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.typography.fontSize.medium / 3,
  },
  heading: {
    color: theme.palette.grey.dark,
    fontFamily: 'Lato-Bold',
    fontSize: theme.typography.fontSize.medium,
  },
  date: {
    color: theme.palette.grey.dark,
    fontFamily: 'Lato-Light',
    fontSize: theme.typography.fontSize.small,
  },
  content: {
    color: theme.palette.grey.dark,
    fontFamily: 'Lato-Light',
    fontSize: theme.typography.fontSize.small,
    marginBottom: theme.typography.fontSize.small / 3,
  },
  icon: {
    marginTop: 'auto',
    marginLeft: 'auto',
  },
});
