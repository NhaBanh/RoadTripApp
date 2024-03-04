/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

import './src/services/i18n/i18n';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
