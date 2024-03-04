import {StyleSheet} from 'react-native';

import {TEXT_FONT_STYLE, TEXT_SIZE_STYLE} from '../../../constant/styles';
import {styleFactory} from '../../../constant/theme';

export const createStyle = t => {
  const theme = styleFactory(t);

  return StyleSheet.create({
    container: {
      borderRadius: theme.roundness,
      borderWidth: 1,
      flexDirection: 'row',
    },
    tabItem: {
      flex: 1,
    },
    txtTitle: {
      ...TEXT_FONT_STYLE.BOLD,
      ...TEXT_SIZE_STYLE.title,
      color: theme.color.white,
    },
  });
};
