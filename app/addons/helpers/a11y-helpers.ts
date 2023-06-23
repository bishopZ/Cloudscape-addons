import type {
  AppLayoutProps, CardsProps, DatePickerProps, MultiselectProps, PaginationProps, TableProps
} from '@cloudscape-design/components';

import type { GenericObject } from './type-helpers';

// This setion is not needed if you use the Cloudscap I18n suppert: TODO link
export const errorIconAriaLabel = 'Error';
export const selectedAriaLabel = 'Selected';
export const expandAriaLabel = 'Expand';
export const clearAriaLabel = 'Clear';
export const externalIconAriaLabel = 'Opens in a new tab';
export const closeModalAriaLabel = 'Close modal';
export const filteringAriaLabel = 'Filter instances';
export const filteringClearAriaLabel = 'Clear filtering';
export const filteringPlaceholder = 'Search';
export const dismissLabel = 'Dismiss';
export const loadingText = 'Loading';
export const recoveryText = 'Refresh';
export const finishedText = 'End of results.';
export const deselectAriaLabel = (option: MultiselectProps.Option) => `Deselect ${option.label}`;

export const nextMonthAriaLabel = 'Next month';
export const previousMonthAriaLabel = 'Previous month';
export const todayAriaLabel = 'Today';

export const layoutLabels: AppLayoutProps.Labels = {
  navigation: 'Navigation drawer',
  navigationClose: 'Close navigation drawer',
  navigationToggle: 'Open navigation drawer',
  notifications: 'Notifications',
  tools: 'Help panel',
  toolsClose: 'Close help panel',
  toolsToggle: 'Open help panel'
};

export const datePickerLabels: DatePickerProps.OpenCalendarAriaLabel = selectedDate =>
  `Choose certificate expiry date${
    selectedDate
      ? `, selected date is ${selectedDate}`
      : ''}`;

export const paginationLabels: PaginationProps.Labels = {
  nextPageLabel: 'Next page',
  previousPageLabel: 'Previous page',
  pageLabel: pageNumber => `Page ${pageNumber} of all pages`
};

export const tableLabels: TableProps.AriaLabels<GenericObject> = {
  selectionGroupLabel: 'Items selection',
  allItemsSelectionLabel: ({ selectedItems }) =>
    `${selectedItems.length} ${selectedItems.length === 1 ? 'item' : 'items'} selected`,
  itemSelectionLabel: ({ selectedItems }, item) => {
    const isItemSelected = selectedItems.filter(candidate => candidate.title === item.title).length;
    return `${item.title} is ${isItemSelected ? '' : 'not'} selected`;
  }
};

export const cardLabels = (nameField: string): CardsProps.AriaLabels<GenericObject> => ({
  itemSelectionLabel: (event, item) => `select ${item[nameField]}`,
  selectionGroupLabel: 'Item selection'
});
