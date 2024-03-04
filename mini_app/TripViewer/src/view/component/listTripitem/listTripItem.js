import React, {useRef, useContext} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {ThemeContext} from '../../../services/context/themeContext';

import {createStyle} from './styles';

const ListTripItem = props => {
  const {name, descriptionThumbnail} = props;

  const {theme} = useContext(ThemeContext);
  const styles = useRef(createStyle(theme)).current;

  return (
    <View style={styles.container}>
      <View style={styles.imageView} />
      <View style={styles.titleView}>
        <Text style={styles.txtTitle} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.txtContent} numberOfLines={1}>
          {descriptionThumbnail}
        </Text>
      </View>
    </View>
  );
};

ListTripItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    descriptionThumbnail: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }),
};
export default ListTripItem;
