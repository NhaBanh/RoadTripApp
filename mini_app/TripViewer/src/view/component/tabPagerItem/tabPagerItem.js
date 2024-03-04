import PropTypes from 'prop-types';
import React, {memo, useContext, useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ThemeContext} from '../../../services/context/themeContext';

import {createStyle} from './styles';

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
};

const TabPagerItem = memo(props => {
  const {title, onPress, style} = props;

  const {theme} = useContext(ThemeContext);
  const styles = useRef(createStyle(theme)).current;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.txtTitle} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}, propsAreEqual);

TabPagerItem.defaultProps = {
  title: '',
  style: {},
};

TabPagerItem.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({}),
};
export default TabPagerItem;
