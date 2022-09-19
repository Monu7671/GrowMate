import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../../../Theme';

function TabButton({
  selected,
  children,
  style: additionalStyles,
  onPress: handlePress,
}) {
  return (
    <Pressable
      style={{
        ...styles.container,
        ...additionalStyles,
        borderBottomColor: selected
          ? theme.palette.primary.main
          : 'transparent',
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          ...styles.text,
          color: theme.palette[selected ? 'primary' : 'grey'].main,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export default TabButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderColor: 'transparent',
    borderWidth: 2,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
});
