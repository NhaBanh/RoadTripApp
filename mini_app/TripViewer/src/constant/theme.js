export const THEME = {
  DARK: 'Dark',
  LIGHT: 'Light',
};

export const roundness = 8;

export const Light = {
  white: '#FFFFFF',
  black: '#000000',
};

export const Dark = {
  ...Light,
};

export const styleFactory = theme => {
  switch (theme) {
    case THEME.LIGHT:
      return {color: Light, roundness};
    case THEME.DARK:
      return {color: Dark, roundness};

    default:
      return {color: Dark, roundness};
  }
};
