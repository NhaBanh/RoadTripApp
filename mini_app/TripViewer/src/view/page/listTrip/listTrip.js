import React, {useContext, useEffect} from 'react';
import {Image, ScrollView, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {useAtom} from 'jotai';
import {useTranslation} from 'react-i18next';

import {ThemeContext} from '../../../services/context/themeContext';
import ContinueCard from '../../component/continueCard/continueCard';
import SnapCarousel from '../../component/snapCarousel/snapCarousel';
import {NavigationRouteName} from '../../../constant/navigationRouteName';
import {
  currentTripAtom,
  listTripAtom,
} from '../../../services/jotai/atom/tripAtom';

const ListTrip = props => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  const [list, setList] = useAtom(listTripAtom);
  const {t} = useTranslation();

  const [count, setCount] = useAtom(currentTripAtom);
  const increment = () => {
    // setCount(async promiseOrValue => (await promiseOrValue) + 1);
  };

  const onPressContinueCard = () => {
    navigation.navigate(NavigationRouteName.TripDetail);
  };

  useEffect(() => {
    // setCount({
    //   id: 'id2',
    //   name: 'name2',
    //   descriptionThumbnail: 'descriptionThumbnail2',
    //   thumbnailUrl: 'thumbnailUrl2',
    // });
    setList([
      {
        id: 'id1',
        name: 'name1',
        descriptionThumbnail: 'descriptionThumbnail1',
        thumbnailUrl: 'thumbnailUrl1',
      },
    ]);
  }, []);

  return (
    <ScrollView>
      <ContinueCard onPress={onPressContinueCard} />
      {/* <SnapCarousel data={list} /> */}
    </ScrollView>
  );
};

export default ListTrip;
