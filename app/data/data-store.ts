import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import articles from './articles';
import notifications from './notifications';
import preferences from './preferences';

export const store = configureStore({
  reducer: {
    notifications: notifications.reducer,
    articles: articles.reducer,
    preferences: preferences.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>
