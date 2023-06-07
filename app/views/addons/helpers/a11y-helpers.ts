import type { AppLayoutProps, DatePickerProps, MultiselectProps, PaginationProps } from '@cloudscape-design/components';

// provided by I18n tools?
export const errorIconAriaLabel = 'Error';
export const selectedAriaLabel = 'Selected';
export const expandAriaLabel = 'Expand';
export const clearAriaLabel = 'Clear';
export const externalIconAriaLabel = 'Opens in a new tab';
export const closeModalAriaLabel = 'Close modal';
// export const deselectAriaLabel = e => `Remove ${e.label}`;
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

// export const cardLabels = {
//   itemSelectionLabel: (e, n) => `select ${n.name}`,
//   selectionGroupLabel: 'Item selection'
// };

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

// export const tableLabels = {
//   selectionGroupLabel: 'Items selection',
//   allItemsSelectionLabel: ({ selectedItems }) =>
//     `${selectedItems.length} ${selectedItems.length === 1 ? 'item' : 'items'} selected`,
//   itemSelectionLabel: ({ selectedItems }, item) => {
//     const isItemSelected = selectedItems.filter(i => i.name === item.name).length;
//     return `${item.name} is ${isItemSelected ? '' : 'not'} selected`;
//   }
// };

