import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../../../../Theme';
import RelatedArticlesModal from './Subcomponents/RelatedArticlesModal';
import RelatedItem from './Subcomponents/RelatedItem';

function RelatedTab({ data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      {data.map((item, index, array) => (
        <RelatedItem
          key={item.articleId}
          data={item}
          style={{
            // no margin for last one
            marginBottom: index === array.length - 1 ? 0 : '5%',
          }}
        />
      ))}
      <RelatedArticlesModal
        onClose={() => setShowModal(false)}
        visible={showModal}
      />
      <Pressable onPress={() => setShowModal(true)}>
        <Text style={styles.moreText}>...more</Text>
      </Pressable>
    </View>
  );
}

export default RelatedTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  moreText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12.5,
    marginLeft: 'auto',
    marginTop: 5,
    color: theme.palette.grey.dark,
  },
});
