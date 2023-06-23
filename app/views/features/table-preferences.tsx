import type { CollectionPreferencesProps } from '@cloudscape-design/components';
import { CollectionPreferences } from '@cloudscape-design/components';
import React from 'react';

import type { PreferenceConfirm, TableColumn } from '/addons/helpers/type-helpers';
import type { Article } from '/data/articles';
import type { AppDispatch } from '/data/data-store';
import { useAppDispatch } from '/data/data-store';
import type { Namespace } from '/data/preferences';
import { updatePreferences } from '/data/preferences';

type VisibleContentOptions = CollectionPreferencesProps.VisibleContentOptionsGroup

export type SavedPreferences = {
  pageSize: number;
  wrapLines: boolean;
  visibleContent?: string[];
  contentSelection: string[];
  columnWidth: number[];
  pageSizes: number[];
};

type SavedPreferencesProps = {
  savedPreferences: SavedPreferences;
  mediaName: Namespace;
  columns?: (TableColumn<Article>)[];
};

type onConfirmProps = SavedPreferencesProps & { dispatch: AppDispatch };

const makeOnConfirm = ({ savedPreferences, dispatch, mediaName }: onConfirmProps) => {
  const onConfirm = ({ detail }: { detail: CollectionPreferencesProps.Preferences }) => {
    const { pageSize, visibleContent, wrapLines } = detail;
    const newPreferences = Object.assign({}, savedPreferences, {
      contentSelection: visibleContent,
      pageSize,
      wrapLines,
    });
    dispatch(updatePreferences({ preferences: newPreferences, mediaName }));
  };
  return onConfirm as PreferenceConfirm<SavedPreferences>;
};

export const Preferences = (props: SavedPreferencesProps) => {
  const { savedPreferences, columns, mediaName } = props;
  const dispatch = useAppDispatch();
  const { pageSizes, pageSize, contentSelection, wrapLines } = savedPreferences;
  const pageSizesOptions = pageSizes.map(size => ({
    value: size,
    label: `${size} ${mediaName.toLocaleLowerCase('en') ?? ''}`
  }));
  const columnDefinitions = columns ?? [];
  const visibleContentOptions = [{
    label: 'Select visible content',
    options: columnDefinitions.map(item => ({
      id: item.id ?? '',
      label: item.header as string,
      editable: item.editable ?? true
    }))
  }];

  return (
    <CollectionPreferences
      title="Table preferences"
      confirmLabel="Confirm"
      cancelLabel="Cancel"
      pageSizePreference={{
        title: 'Page size',
        options: pageSizesOptions
      }}
      wrapLinesPreference={{
        label: 'Wrap lines',
        description: 'Enable for lines to wrap inside table cells.'
      }}
      visibleContentPreference={{
        title: 'Visible columns',
        options: visibleContentOptions as VisibleContentOptions[]
      }}
      preferences={{
        pageSize,
        visibleContent: contentSelection,
        wrapLines,
      }}
      onConfirm={makeOnConfirm({
        savedPreferences,
        dispatch,
        mediaName
      })}
    />
  );
};
