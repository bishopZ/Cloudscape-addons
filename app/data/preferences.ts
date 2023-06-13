/* eslint-disable no-param-reassign */

import type { Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ValueOf } from '/addons/helpers/type-helpers';

import { loadLocalStorage, saveLocalStorage } from '../utils/local-storage';
import type { RootState } from './data-store';

const PREFERNCE_STORAGE_KEY = 'table-preferences';

export const PREFERENCES = {
  ARTICLES: 'articles'
} as const;

export type Namespace = ValueOf<typeof PREFERENCES>

const initialState = {
  initialized: false,
  [PREFERENCES.ARTICLES]: {
    pageSizes: [5, 25, 50],
    pageSize: 50,
    wrapLines: false,
    columnWidth: [240, 150, 0, 0, 0, 0], // for all columns
    contentSelection: [ // for visible columns
      'title', 'publicationDate', 'section', 'format'
    ]
  }
};

type State = typeof initialState;
const articlePref = initialState[PREFERENCES.ARTICLES];
export type Preference = typeof articlePref

const clone = (value: unknown) => JSON.parse(JSON.stringify(value));
const cloneState = (value: unknown) => clone(value) as State;

const set = (state: State, action: PayloadAction<State>) => {
  if (action.payload) {
    state = action.payload;
    saveLocalStorage(PREFERNCE_STORAGE_KEY, state);
  } else {
    state = cloneState(initialState);
  }
  state.initialized = true;
  return state;
};

const update = (state: State, action: PayloadAction<{ preferences: Preference, mediaName: Namespace}>) => {
  const { preferences, mediaName } = action.payload;
  state[mediaName] = preferences;
  saveLocalStorage(PREFERNCE_STORAGE_KEY, state);
  return state;
};

export const preferences = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setPreferences: set,
    updatePreferences: update
  },
});

export const { setPreferences, updatePreferences } = preferences.actions;

export const initPreferences = (dispatch: Dispatch) => {
  const preferences = loadLocalStorage(PREFERNCE_STORAGE_KEY);
  dispatch(setPreferences(preferences));
};

export const selectPreferences = (state: RootState) => state.preferences;

export default preferences;
