import PropTypes from 'prop-types';
import React, {memo, useContext, useRef} from 'react';
import {View} from 'react-native';

import {ThemeContext} from '../../../services/context/themeContext';
import TabPagerItem from '../tabPagerItem/tabPagerItem';

import {createStyle} from './styles';

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
};

const TabPager = memo(props => {
  const {data, onPressTab, style} = props;

  const {theme} = useContext(ThemeContext);
  const styles = useRef(createStyle(theme)).current;

  return (
    <View style={[styles.container, style]}>
      {data.map((i, idx) => (
        <TabPagerItem title={i} onPress={onPressTab} key={`${idx}${i}`} />
      ))}
    </View>
  );
}, propsAreEqual);

TabPager.defaultProps = {
  data: [],
  onPressTab: () => {},
  style: {},
};

TabPager.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onPressTab: PropTypes.func,
  style: PropTypes.shape({}),
};
export default TabPager;
