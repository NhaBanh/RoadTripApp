import {StyleSheet} from 'react-native';

import {TEXT_FONT_STYLE, TEXT_SIZE_STYLE} from '../../../constant/styles';
import {styleFactory} from '../../../constant/theme';

export const createStyle = t => {
  const theme = styleFactory(t);

  return StyleSheet.create({
    container: {
      borderRadius: theme.roundness,
      borderWidth: 4,
      minHeight: 200,
      maxHeight: 400,
      margin: 16,
    },
    imageView: {
      flex: 1,
    },
    contentView: {
      backgroundColor: theme.color.white,
    },
    txtTitle: {
      ...TEXT_FONT_STYLE.BOLD,
      ...TEXT_SIZE_STYLE.title,
      color: theme.color.black,
    },
    txtContent: {
      ...TEXT_FONT_STYLE.REGULAR,
      ...TEXT_SIZE_STYLE.label,
      color: theme.color.black,
    },
    flx: {
      flex: 1,
    },
  });
};
