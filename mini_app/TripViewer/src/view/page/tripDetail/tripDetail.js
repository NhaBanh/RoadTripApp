import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';
import {useAtomValue} from 'jotai';
import React, {useCallback, useContext, useMemo, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {ThemeContext} from '../../../services/context/themeContext';
import {currentTripAtom} from '../../../services/jotai/atom/tripAtom';
import TabPager from '../../component/tabPager/tabPager';

import {createStyle} from './styles';

const TripDetail = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useRef(createStyle(theme)).current;
  const currentTrip = useAtomValue(currentTripAtom);
  const {t} = useTranslation();
  // ref
  const bottomSheetRef = useRef(null);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const sections = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, index) => ({
          title: `Section ${index}`,
          data: Array(10)
            .fill(0)
            .map((_, index) => `Item ${index}`),
        })),
    [],
  );

  const renderSectionHeader = useCallback(
    ({section}) => (
      <View style={{backgroundColor: 'red'}}>
        <Text>{section.title}</Text>
      </View>
    ),
    [],
  );
  const renderItem = useCallback(
    ({item}) => (
      <View style={{borderWidth: 1}}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      /> */}
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
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[100, '50%', '90%']}
        // handleIndicatorStyle={{
        //   backgroundColor: 'white',
        //   width: 100,
        //   height: 100,
        // }}
        // handleStyle={{backgroundColor: 'red'}}
        // style={{backgroundColor: 'transparent'}}
        backgroundStyle={{backgroundColor: 'transparent'}}
        handleComponent={() => (
          <View>
            <View
              style={{
                height: 40,
                backgroundColor: 'white',
                borderTopRightRadius: 16,
                borderTopLeftRadius: 16,
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}
            />
            <View
              style={{
                borderWidth: 2,
                width: '80%',
                height: 100,
                alignSelf: 'center',
                backgroundColor: 'blue',
                borderRadius: 16,
              }}>
              <Text>{currentTrip.name}</Text>
              <Text>{currentTrip.descriptionThumbnail}</Text>
            </View>
          </View>
        )}
        handleHeight={100}
        index={2}>
        {/* <BottomSheetView>
          <Text>Awesome 🎉</Text>

          <Text>Awesome 🎉</Text>
        </BottomSheetView> */}
        <TabPager data={[t('Planing'), t('Locations')]} />
        <BottomSheetSectionList
          sections={sections}
          keyExtractor={i => i}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          style={{backgroundColor: 'white'}}
        />
      </BottomSheet>
    </View>
  );
};

export default TripDetail;
