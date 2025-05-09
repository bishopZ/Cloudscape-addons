import { useCollection } from '@cloudscape-design/collection-hooks';
import type { TableProps } from '@cloudscape-design/components';
import { Pagination, Table, TextFilter } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GenericError from '/addons/details/generic-error';
import { LoadingSpinner } from '/addons/details/loading';
import { paginationLabels, tableLabels } from '/addons/helpers/a11y-helpers';
import type { ColumnWidthsChange } from '/addons/helpers/type-helpers';
import { GenericEmpty, NoMatch } from '/addons/tables/generic-empty';
import type { Article } from '/data/articles';
import { initArticles, selectArticles, setSelected } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';
import { initPreferences, PREFERENCES, selectPreferences, updatePreferences } from '/data/preferences';

// import { Preferences } from '/views/features/table-preferences';
import { BlogHeader } from './search-header';
import { TABLE_COLUMNS } from './table-data';

export const Search = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { initialized, items: articles, error } = useAppSelector(selectArticles);

  useEffect(() => {
    if (!initialized) void dispatch(initArticles);
  }, [initialized]);

  // Table preferences
  const preferences = useAppSelector(selectPreferences);
  const articlePrefs = preferences[PREFERENCES.ARTICLES];
  const preferencesFetched = preferences.initialized;
  useEffect(() => {
    if (!preferencesFetched) dispatch(initPreferences);
  }, [preferencesFetched]);
  TABLE_COLUMNS.forEach((column, index) => {
    column.width = articlePrefs.columnWidth[index];
    return column;
  });

  // Table collection settings
  let TableFooter = <LoadingSpinner />;
  if (initialized) TableFooter = <GenericEmpty
    title={'No articles yet'}
    description={'We couldn\'t find any articles. Try again later.'}
    buttonName={'Refresh'}
    onClick={() => { window.location.reload() }}
  />;
  if (error && articles.length === 0) TableFooter = <GenericError />;

  const collectionSettings = {
    filtering: {
      defaultFilteringText: params.filter?.toLocaleLowerCase() ?? '',
      empty: TableFooter,
      noMatch: <NoMatch clear={() => { actions.setFiltering('') }} />,
    },
    pagination: { pageSize: articlePrefs.pageSize },
    sorting: { defaultState: {
      sortingColumn: TABLE_COLUMNS[2],
      isDecending: true
    } },
    selection: { trackBy: 'title', keepSelection: true },
  };

  const {
    items, actions, filterProps, collectionProps, paginationProps, filteredItemsCount
  } = useCollection(articles, collectionSettings);

  if (!preferencesFetched) return <LoadingSpinner />;

  const ArticlePagination = <Pagination
    {...paginationProps}
    ariaLabels={paginationLabels}
  />;

  // const ArticlePreferences = <Preferences
  //   savedPreferences={articlePrefs}
  //   columns={TABLE_COLUMNS}
  //   mediaName={PREFERENCES.ARTICLES}
  // />;

  const ArticleFilter = <TextFilter
    {...filterProps}
    countText={`${filteredItemsCount} ${filteredItemsCount === 1 ? 'match' : 'matches'}`}
    filteringPlaceholder="Find an article"
    filteringAriaLabel="Find an article"
  />;

  return <Table
    {...collectionProps}
    variant="full-page"
    trackBy="slug"
    resizableColumns
    stickyHeader
    firstIndex={paginationProps.currentPageIndex * articlePrefs.pageSize + 1}
    stripedRows
    columnDefinitions={TABLE_COLUMNS}
    visibleColumns={articlePrefs.contentSelection}
    wrapLines={articlePrefs.wrapLines}
    items={items}
    totalItemsCount={items.length}
    ariaLabels={tableLabels as unknown as TableProps.AriaLabels<Article>}
    loading={!initialized && !preferencesFetched}
    loadingText="Loading"
    header={<BlogHeader />}
    pagination={articles.length > articlePrefs.pageSize && ArticlePagination}
    // preferences={ArticlePreferences}
    filter={ArticleFilter}
    onColumnWidthsChange={(event: ColumnWidthsChange) => {
      if (event.detail.widths) {
        const newPreferences = { ...articlePrefs };
        newPreferences.columnWidth = event.detail.widths as number[];
        dispatch(updatePreferences({ preferences: newPreferences, mediaName: PREFERENCES.ARTICLES }));
      }
    }}
    onSelectionChange={event => {
      dispatch(setSelected(event.detail.selectedItems));
    }}
  />;
};
