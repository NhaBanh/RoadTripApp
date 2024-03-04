import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage, loadable} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loadable} from 'jotai/vanilla/utils/loadable';

import {TripInterface} from '../interface/tripInterface';
import {STORAGE_KEY} from '../../../constant/storage';

const storage = createJSONStorage(() => AsyncStorage);

export const currentTripAtom = atomWithStorage<TripInterface | null>(
  STORAGE_KEY.STORAGE_KEY_CURRENT_TRIP,
  null,
  storage,
);
export const loadableCurrentTripAtom = loadable(currentTripAtom);

export const listTripAtom = atom<TripInterface[]>([]);
