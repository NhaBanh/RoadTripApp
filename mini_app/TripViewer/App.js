import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppNavigation from './src/services/navigation/appNavigation';
import {ThemeContext} from './src/services/context/themeContext';
import {Dark} from './src/constant/theme';

const App = () => {
  const [theme, setTheme] = useState(Dark);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
};

export default App;
