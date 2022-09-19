import { Suspense, useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useResource } from '../../../../../../utils/CustomHooks/useResource';
import fetchRelatedItemImg from '../../../../../../utils/dataFetchers/fetchRelatedItemImg';
import SuspendedImg from '../../../../../SuspendedImg';
import theme from '../../../../../Theme';
import { BetScreenContext } from '../../../../BetScreenContext';

function RelatedItem({ style: additionalStyles, data: { title, picID } }) {
  const { betID } = useContext(BetScreenContext);
  const imgResource = useResource(
    fetchRelatedItemImg.bind(null, betID, picID),
    []
  );

  return (
    <View style={{ ...styles.container, ...additionalStyles }}>
      <Suspense fallback={<ImgFallback />}>
        <SuspendedImg imgResource={imgResource} style={styles.img} />
      </Suspense>
      <View style={styles.textSide}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

function ImgFallback() {
  return (
    <View style={styles.imgFallback}>
      <ActivityIndicator color="white" size="small" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 69,
    borderWidth: 0.33,
    borderColor: '#CED5DC',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  img: {
    height: '100%',
    width: '30%',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  imgFallback: {
    height: '100%',
    width: '30%',
    backgroundColor: theme.palette.grey.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  textSide: {
    marginLeft: '5%',
    flex: 1,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
  },
});

export default RelatedItem;
