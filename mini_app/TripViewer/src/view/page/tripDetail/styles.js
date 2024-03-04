import {StyleSheet} from 'react-native';

import {TEXT_FONT_STYLE, TEXT_SIZE_STYLE} from '../../../constant/styles';
import {styleFactory} from '../../../constant/theme';

export const createStyle = t => {
  const theme = styleFactory(t);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    },
    txtContent: {
      ...TEXT_FONT_STYLE.REGULAR,
      ...TEXT_SIZE_STYLE.label,
      color: theme.color.black,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    imageView: {
      width: '100%',
      height: 200,
    },
  });
};
