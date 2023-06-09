import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import notifications from './notifications';

export const store = configureStore({
  reducer: {
    notifications: notifications.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>
