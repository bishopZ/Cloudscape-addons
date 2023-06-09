
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { FlashbarMessage } from '../addons/helpers/type-helpers';
import type { RootState } from './data-store';

const initialState = {
  items: [] as FlashbarMessage[],
};

type State = typeof initialState;

const add = (state: State, action: PayloadAction<FlashbarMessage>) => {
  state.items.push(action.payload);
};
const dismiss = (state: State, action: PayloadAction<string>) => {
  state.items = state.items.filter(item => item.id !== action.payload);
};
const clear = (state: State) => {
  state.items = [];
};

export const notifications = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: add,
    dismissNotification: dismiss,
    clearNotifications: clear,
  },
});

export const {
  addNotification, dismissNotification, clearNotifications
} = notifications.actions;

export const selectNotifications = (state: RootState) => {
  return state.notifications.items;
};

export default notifications;
