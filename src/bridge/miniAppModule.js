import {NativeModules} from 'react-native';
const {MiniAppModule} = NativeModules;

export const MiniAppModuleFunction = {
  openApp: MiniAppModule.openApp,
  getBundleNames: MiniAppModule.getBundleNames,
};
