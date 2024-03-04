import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ListTrip from '../../view/page/listTrip/listTrip';
import {NavigationRouteName} from '../../constant/navigationRouteName';
import TripDetail from '../../view/page/tripDetail/tripDetail';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRouteName.ListTrip}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationRouteName.ListTrip} component={ListTrip} />
      <Stack.Screen
        name={NavigationRouteName.TripDetail}
        component={TripDetail}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
