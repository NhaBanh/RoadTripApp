import PropTypes from 'prop-types';
import React, {useContext, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useAtomValue} from 'jotai';

import {ThemeContext} from '../../../services/context/themeContext';
import {loadableCurrentTripAtom} from '../../../services/jotai/atom/tripAtom';
import {JOTAI_LOADABLE_STATE} from '../../../constant/jotai';

import {createStyle} from './styles';

const ContinueCard = props => {
  const {onPress} = props;

  const {theme} = useContext(ThemeContext);
  const styles = useRef(createStyle(theme)).current;
  const loadableCurrentTrip = useAtomValue(loadableCurrentTripAtom);

  if (
    loadableCurrentTrip.state === JOTAI_LOADABLE_STATE.LOADING ||
    (loadableCurrentTrip.state === JOTAI_LOADABLE_STATE.HAS_DATA &&
      loadableCurrentTrip.data === null)
  ) {
    return <Text>Loading...</Text>;
  }

  if (!loadableCurrentTrip.data) {
    return <Text style={styles.txtTitle}>Explore new trip</Text>;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Animated.Image
        style={{
          width: '100%',
          height: 200,
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        sharedTransitionTag="sharedTransitionTag-tripThumbnail"
      />
      <View style={styles.contentView}>
        <Text style={styles.txtTitle}>{loadableCurrentTrip.data.name}</Text>
        <Text style={styles.txtContent}>
          {loadableCurrentTrip.data.descriptionThumbnail}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ContinueCard.defaultProps = {
  onPress: () => {},
};

ContinueCard.propTypes = {
  onPress: PropTypes.func,
};
export default ContinueCard;
