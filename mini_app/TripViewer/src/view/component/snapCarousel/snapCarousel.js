import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PropTypes from 'prop-types';

import ListTripItem from '../listTripitem/listTripItem';

const PAGE_WIDTH = Dimensions.get('screen').width;

const SnapCarousel = props => {
  const {data} = props;

  return (
    <Carousel
      width={PAGE_WIDTH}
      height={PAGE_WIDTH / 2}
      style={{
        width: PAGE_WIDTH,
        height: PAGE_WIDTH / 2,
      }}
      loop
      windowSize={3}
      data={data}
      renderItem={({item, index, animationValue}) => (
        <ListTripItem
          index={index}
          animationValue={animationValue}
          id={item.id}
          name={item.name}
          descriptionThumbnail={item.descriptionThumbnail}
        />
      )}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 100,
      }}
    />
  );
};

SnapCarousel.defaultProps = {
  data: [],
};

SnapCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      descriptionThumbnail: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    }),
  ),
};
export default SnapCarousel;
