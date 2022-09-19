import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '../../../icons/Icon';
import theme from '../../../Theme';
import Chips from './ReactionsTab/Subcomponents/CommentsModal/Subcomponents/Chips';

function OverlayModal({ heading, visible, onClose: handleClose, children }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={handleClose}
      animationType="slide"
      transparent
    >
      <Pressable onPress={handleClose} style={styles.overlayBG} />
      <View style={styles.content}>
        <View style={styles.handle} />
        <View style={styles.heading}>
          <Text style={styles.headingText}>{heading}</Text>
          <Pressable onPress={handleClose}>
            <Icon symbol="closeFilledBlack" />
          </Pressable>
        </View>
        <Chips />
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </Modal>
  );
}

export default OverlayModal;

const styles = StyleSheet.create({
  overlayBG: {
    backgroundColor: theme.palette.grey.dark,
    opacity: 0.5,
    flex: 3,
  },
  content: {
    width: '100%',
    flex: 7,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  handle: {
    backgroundColor: theme.palette.grey.light,
    height: 4,
    width: '50%',
    alignSelf: 'center',
    marginTop: 7,
    marginBottom: 10,
  },
  heading: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Lato-Bold',
    fontSize: theme.typography.fontSize.large,
  },
  childrenContainer: { flex: 1 },
});
