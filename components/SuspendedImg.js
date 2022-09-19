import { Image } from 'react-native';

function SuspendedImg({ imgResource, style = {} } = {}) {
  const img = imgResource.read();
  return <Image style={style} source={img} />;
}

export default SuspendedImg;
