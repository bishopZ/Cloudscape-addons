import type { Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { GenericObject } from '/addons/helpers/type-helpers';

import { fetchArticles } from './api';
import type { RootState } from './data-store';

export type Article = {
  slug: string
  title: string
  format: string
  topic: string
  discipline: string
  section: string
  vendor: string
  description: string
  image: string
  tenets?: number[]
  publicationDate: Date
  editDate?: Date
  referenceComponent?: string
  referenceLink?: string
}

const initialState = {
  initialized: false,
  items: [] as Article[],
  selectedItems: [] as Article[],
  error: null as null | GenericObject | string
};

type State = typeof initialState;

const add = (state: State, action: PayloadAction<Article[]>) => {
  state.items = action.payload;
  state.initialized = true;
};
const select = (state: State, action: PayloadAction<Article[]>) => {
  state.selectedItems = action.payload;
};

export const articles = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: add,
    setSelected: select
  },
});

export const { addArticles, setSelected } = articles.actions;

export const initArticles = async (dispatch: Dispatch) => {
  const articles = await fetchArticles();
  dispatch(addArticles(articles));
};

export const selectArticles = (state: RootState) => {
  return state.articles;
};

export const selectArticle = (slug: string) => (state: RootState) => {
  return state.articles.items.find(item => item.slug === slug);
};

export const getSelectedCount = (state: RootState) => {
  const slice = state.articles;
  return {
    selected: slice.selectedItems.length,
    total: slice.items.length,
    selectedItems: slice.selectedItems
  };
};

export default articles;
