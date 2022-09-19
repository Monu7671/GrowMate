import Svg from 'react-native-svg';
import symbols from './AllSymbols';

/* Use this as the interface that contains all the possible icons */
function Icon({ symbol, color = 'black', scale = 1, ...restProps }) {
  const baseSize = symbols[symbol].size;
  const content = symbols[symbol].content(color, scale);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Svg
      height={baseSize * scale}
      width={baseSize * scale}
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {content}
    </Svg>
  );
}

export default Icon;
