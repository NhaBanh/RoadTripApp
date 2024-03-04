import {StyleSheet} from 'react-native';

import {TEXT_FONT_STYLE, TEXT_SIZE_STYLE} from '../../../constant/styles';
import {styleFactory} from '../../../constant/theme';

export const createStyle = t => {
  const theme = styleFactory(t);

  return StyleSheet.create({
    container: {
      borderRadius: theme.roundness,
      overflow: 'hidden',
      borderWidth: 1,
    },
    titleView: {
      position: 'absolute',
    },
    imageView: {
      width: '100%',
      height: '100%',
    },
    txtTitle: {
      ...TEXT_FONT_STYLE.BOLD,
      ...TEXT_SIZE_STYLE.title,
      color: theme.color.white,
    },
    txtContent: {
      ...TEXT_FONT_STYLE.REGULAR,
      ...TEXT_SIZE_STYLE.label,
      color: theme.color.white,
    },
  });
};
