// import type { BoardProps } from '@cloudscape-design/components';
import type {
  CodeEditorProps, DateRangePickerProps, FileUploadProps, FormFieldProps, MultiselectProps, PropertyFilterProps, S3ResourceSelectorProps,
  TagEditorProps, TopNavigationProps, WizardProps
} from '@cloudscape-design/components';

import * as Labels from './a11y-helpers';


// AttributeEditorProps.I18nStrings {
//   errorIconAriaLabel?: string
//   itemRemovedAriaLive?: string
//   removeButtonAriaLabel?: (item: T) => string
// }

// export const boardStrings = (() => {
//   const createAnnouncement = (operationAnnouncement, conflicts, disturbed) => {
//     const conflictsAnnouncement = conflicts.length > 0
//       ? `Conflicts with ${conflicts.map(c => c.data.title).join(', ')}.`
//       : '';
//     const disturbedAnnouncement = disturbed.length > 0
//       ? `Disturbed ${disturbed.length} items.`
//       : '';
//     return [operationAnnouncement, conflictsAnnouncement, disturbedAnnouncement].filter(Boolean).join(' ');
//   };
//   return {
//     liveAnnouncementDndStarted: operationType => operationType === 'resize' ? 'Resizing' : 'Dragging',
//     liveAnnouncementDndItemReordered: operation => {
//       const columns = `column ${operation.placement.x + 1}`;
//       const rows = `row ${operation.placement.y + 1}`;
//       return createAnnouncement(
//         `Item moved to ${operation.direction === 'horizontal' ? columns : rows}.`,
//         operation.conflicts,
//         operation.disturbed
//       );
//     },
//     liveAnnouncementDndItemResized: operation => {
//       const columnsConstraint = operation.isMinimalColumnsReached ? ' (minimal)' : '';
//       const rowsConstraint = operation.isMinimalRowsReached ? ' (minimal)' : '';
//       const sizeAnnouncement = operation.direction === 'horizontal'
//         ? `columns ${operation.placement.width}${columnsConstraint}`
//         : `rows ${operation.placement.height}${rowsConstraint}`;
//       return createAnnouncement(`Item resized to ${sizeAnnouncement}.`, operation.conflicts, operation.disturbed);
//     },
//     liveAnnouncementDndItemInserted: operation => {
//       const columns = `column ${operation.placement.x + 1}`;
//       const rows = `row ${operation.placement.y + 1}`;
//       return createAnnouncement(`Item inserted to ${columns}, ${rows}.`, operation.conflicts, operation.disturbed);
//     },
//     liveAnnouncementDndCommitted: operationType => `${operationType} committed`,
//     liveAnnouncementDndDiscarded: operationType => `${operationType} discarded`,
//     liveAnnouncementItemRemoved: op => createAnnouncement(`Removed item ${op.item.data.title}.`, [], op.disturbed),
//     navigationAriaLabel: 'Board navigation',
//     navigationAriaDescription: 'Click on non-empty item to move focus over',
//     navigationItemAriaLabel: item => item ? item.data.title : 'Empty',
//   };
// })();


export const boardItemStrings = {
  dragHandleAriaLabel: 'Drag handle',
  dragHandleAriaDescription: 'Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, \
    or Escape to discard.',
  resizeHandleAriaLabel: 'Resize handle',
  resizeHandleAriaDescription: 'Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, \
    or Escape to discard.',
};

// ItemsPaletteProps.I18nStrings {
//   liveAnnouncementDndDiscarded: string
//   liveAnnouncementDndStarted: string
//   navigationAriaDescription?: string
//   navigationAriaLabel: string
//   navigationItemAriaLabel: (
//     item: ItemsPaletteProps.Item<D>
//   ) => string
// }

export const codeEditorStrings: CodeEditorProps.I18nStrings = {
  loadingState: 'Loading code editor',
  errorState: 'There was an error loading the code editor.',
  errorStateRecovery: 'Retry',
  editorGroupAriaLabel: 'Code editor',
  statusBarGroupAriaLabel: 'Status bar',
  cursorPosition: (row, column) => `Ln ${row}, Col ${column}`,
  errorsTab: 'Errors',
  warningsTab: 'Warnings',
  preferencesButtonAriaLabel: 'Preferences',
  paneCloseButtonAriaLabel: 'Close',
  preferencesModalHeader: 'Preferences',
  preferencesModalCancel: 'Cancel',
  preferencesModalConfirm: 'Confirm',
  preferencesModalWrapLines: 'Wrap lines',
  preferencesModalTheme: 'Theme',
  preferencesModalLightThemes: 'Light themes',
  preferencesModalDarkThemes: 'Dark themes'
};

// export const dateRangeStrings: DateRangePickerProps.I18nStrings = {
//   todayAriaLabel: 'Today',
//   nextMonthAriaLabel: 'Next month',
//   previousMonthAriaLabel: 'Previous month',
//   customRelativeRangeDurationLabel: 'Duration',
//   customRelativeRangeDurationPlaceholder: 'Enter duration',
//   customRelativeRangeOptionLabel: 'Custom range',
//   customRelativeRangeOptionDescription: 'Set a custom range in the past',
//   customRelativeRangeUnitLabel: 'Unit of time',
//   formatRelativeRange: e => {
//     const n = 1 === e.amount ? e.unit : `${e.unit}s`;
//     return `Last ${e.amount} ${n}`;
//   },
//   formatUnit: (e, n) => 1 === n ? e : `${e}s`,
//   dateTimeConstraintText: 'Range is 6 to 30 days. For date, use YYYY/MM/DD. For time, use 24 hr format.',
//   relativeModeTitle: 'Relative range',
//   absoluteModeTitle: 'Absolute range',
//   relativeRangeSelectionHeading: 'Choose a range',
//   startDateLabel: 'Start date',
//   endDateLabel: 'End date',
//   startTimeLabel: 'Start time',
//   endTimeLabel: 'End time',
//   clearButtonLabel: 'Clear and dismiss',
//   cancelButtonLabel: 'Cancel',
//   applyButtonLabel: 'Apply'
// };

export const uploadStrings: FileUploadProps.I18nStrings = {
  uploadButtonText: e => e ? 'Choose files' : 'Choose file',
  dropzoneText: e => e ? 'Drop files to upload' : 'Drop file to upload',
  removeFileAriaLabel: e => `Remove file ${e + 1}`,
  limitShowFewer: 'Show fewer files',
  limitShowMore: 'Show more files',
  errorIconAriaLabel: 'Error'
};

// FlashbarProps.I18nStrings {
//   ariaLabel?: string
//   errorIconAriaLabel?: string
//   inProgressIconAriaLabel?: string
//   infoIconAriaLabel?: string
//   notificationBarAriaLabel?: string
//   notificationBarText?: string
//   successIconAriaLabel?: string
//   warningIconAriaLabel?: string
// }

export const formfieldStrings: FormFieldProps.I18nStrings = {
  errorIconAriaLabel: Labels.errorIconAriaLabel
};

export const filterStrings: PropertyFilterProps.I18nStrings = {
  filteringAriaLabel: 'your choice',
  dismissAriaLabel: 'Dismiss',
  filteringPlaceholder: 'Find distributions',
  groupValuesText: 'Values',
  groupPropertiesText: 'Properties',
  operatorsText: 'Operators',
  operationAndText: 'and',
  operationOrText: 'or',
  operatorLessText: 'Less than',
  operatorLessOrEqualText: 'Less than or equal',
  operatorGreaterText: 'Greater than',
  operatorGreaterOrEqualText: 'Greater than or equal',
  operatorContainsText: 'Contains',
  operatorDoesNotContainText: 'Does not contain',
  operatorEqualsText: 'Equals',
  operatorDoesNotEqualText: 'Does not equal',
  editTokenHeader: 'Edit filter',
  propertyText: 'Property',
  operatorText: 'Operator',
  valueText: 'Value',
  cancelActionText: 'Cancel',
  applyActionText: 'Apply',
  allPropertiesLabel: 'All properties',
  tokenLimitShowMore: 'Show more',
  tokenLimitShowFewer: 'Show fewer',
  clearFiltersText: 'Clear filters',
  removeTokenButtonAriaLabel: token => `Remove token ${token.propertyKey} ${token.operator} ${token.value}`,
  enteredTextLabel: text => `Use: "${text}"`
};

export const s3SelectorStrings: S3ResourceSelectorProps.I18nStrings = {
  inContextInputPlaceholder: 's3://bucket/prefix/object',
  inContextSelectPlaceholder: 'Choose a version',
  inContextBrowseButton: 'Browse S3',
  inContextViewButton: 'View',
  inContextViewButtonAriaLabel: 'View (opens in a new tab)',
  inContextLoadingText: 'Loading resource',
  inContextUriLabel: 'S3 URI',
  inContextVersionSelectLabel: 'Object version',
  modalTitle: 'Choose an archive in S3',
  modalCancelButton: 'Cancel',
  modalSubmitButton: 'Choose',
  modalBreadcrumbRootItem: 'S3 buckets',
  selectionBuckets: 'Buckets',
  selectionObjects: 'Objects',
  selectionVersions: 'Versions',
  selectionBucketsSearchPlaceholder: 'Find bucket',
  selectionObjectsSearchPlaceholder: 'Find object by prefix',
  selectionVersionsSearchPlaceholder: 'Find version',
  selectionBucketsLoading: 'Loading buckets',
  selectionBucketsNoItems: 'No buckets',
  selectionObjectsLoading: 'Loading objects',
  selectionObjectsNoItems: 'No objects',
  selectionVersionsLoading: 'Loading versions',
  selectionVersionsNoItems: 'No versions',
  filteringCounterText: count => String(count) + (count === 1 ? ' match' : ' matches'),
  filteringNoMatches: 'No matches',
  filteringCantFindMatch: 'We can\'t find a match.',
  clearFilterButtonText: 'Clear filter',
  // columnBucketID: 'ID',
  columnBucketName: 'Name',
  columnBucketCreationDate: 'Creation date',
  columnBucketRegion: 'Region',
  // columnBucketAccess: 'Access',
  // columnObjectID: 'ID',
  columnObjectKey: 'Key',
  columnObjectLastModified: 'Last modified',
  columnObjectSize: 'Size',
  columnVersionID: 'Version ID',
  columnVersionLastModified: 'Last modified',
  columnVersionSize: 'Size',
  validationPathMustBegin: 'The path must begin with s3://',
  validationBucketLowerCase: 'The bucket name must start with a lowercase character or number.',
  validationBucketMustNotContain: 'The bucket name must not contain uppercase characters.',
  validationBucketMustComplyDns: 'The bucket name must comply with DNS naming conventions',
  validationBucketLength: 'The bucket name must be from 3 to 63 characters.',
  labelSortedDescending: columnName => `${columnName}, sorted descending`,
  labelSortedAscending: columnName => `${columnName}, sorted ascending`,
  labelNotSorted: columnName => `${columnName}, not sorted`,
  labelsPagination: {
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    pageLabel: pageNumber => `Page ${pageNumber} of all pages`
  },
  labelsBucketsSelection: {
    itemSelectionLabel: (data, item) => item.Name ?? '',
    selectionGroupLabel: 'Buckets'
  },
  labelsObjectsSelection: {
    itemSelectionLabel: (data, item) => item.Key ?? '',
    selectionGroupLabel: 'Objects'
  },
  labelsVersionsSelection: {
    itemSelectionLabel: (data, item) => item.LastModified ?? '',
    selectionGroupLabel: 'Versions'
  },
  labelFiltering: itemsType => `Find ${itemsType}`,
  labelRefresh: 'Refresh the data',
  // labelAlertDismiss: 'Dismiss the alert',
  labelModalDismiss: 'Dismiss the modal',
  labelBreadcrumbs: 'S3 navigation'
};

// SplitPanelProps.I18nStrings {
//   closeButtonAriaLabel?: string
//   openButtonAriaLabel?: string
//   preferencesCancel?: string
//   preferencesConfirm?: string
//   preferencesPositionBottom?: string
//   preferencesPositionDescription?: string
//   preferencesPositionLabel?: string
//   preferencesPositionSide?: string
//   preferencesTitle?: string
//   resizeHandleAriaLabel?: string
// }

// TabsProps.I18nStrings {
//   scrollLeftAriaLabel?: string
//   scrollRightAriaLabel?: string
// }

export const tagEditorStrings: TagEditorProps.I18nStrings = {
  keyPlaceholder: 'Enter key',
  valuePlaceholder: 'Enter value',
  addButton: 'Add new tag',
  removeButton: 'Remove',
  undoButton: 'Undo',
  undoPrompt: 'This tag will be removed upon saving changes',
  loading: 'Loading tags that are associated with this resource',
  keyHeader: 'Key',
  valueHeader: 'Value',
  optional: 'optional',
  keySuggestion: 'Custom tag key',
  valueSuggestion: 'Custom tag value',
  emptyTags: 'No tags associated with the resource.',
  tooManyKeysSuggestion: 'You have more keys than can be displayed',
  tooManyValuesSuggestion: 'You have more values than can be displayed',
  keysSuggestionLoading: 'Loading tag keys',
  keysSuggestionError: 'Tag keys could not be retrieved',
  valuesSuggestionLoading: 'Loading tag values',
  valuesSuggestionError: 'Tag values could not be retrieved',
  emptyKeyError: 'You must specify a tag key',
  maxKeyCharLengthError: 'The maximum number of characters you can use in a tag key is 128.',
  maxValueCharLengthError: 'The maximum number of characters you can use in a tag value is 256.',
  duplicateKeyError: 'You must specify a unique tag key.',
  invalidKeyError: 'Invalid key. Keys can only contain Unicode letters, digits, \
    white space and any of the following: _.:/=+@-',
  invalidValueError: 'Invalid value. Values can only contain Unicode letters, \
    digits, white space and any of the following: _.:/=+@-',
  awsPrefixError: 'Cannot start with aws:',
  tagLimit: (availableTags, tagLimit) => availableTags === tagLimit
    ? `You can add up to ${tagLimit} tags.`
    : `You can add up to ${availableTags} more tags.`,
  tagLimitReached: tagLimit => tagLimit === 1
    ? 'You have reached the limit of 1 tag.'
    : `You have reached the limit of ${tagLimit} tags.`,
  tagLimitExceeded: tagLimit => tagLimit === 1
    ? 'You have exceeded the limit of 1 tag.'
    : `You have exceeded the limit of ${tagLimit} tags.`,
  enteredKeyLabel: key => `Use "${key}"`,
  enteredValueLabel: value => `Use "${value}"`
};

// TokenGroupProps.I18nStrings {
//   limitShowFewer?: string
//   limitShowMore?: string
// }

export const navigationStrings: TopNavigationProps.I18nStrings = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu'
};

export const wizardStrings: WizardProps.I18nStrings = {
  stepNumberLabel: stepNumber => `Step ${stepNumber}`,
  collapsedStepsLabel: (stepNumber, stepsCount) =>
    `Step ${stepNumber} of ${stepsCount}`,
  skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
  navigationAriaLabel: 'Steps',
  cancelButton: 'Cancel',
  previousButton: 'Previous',
  nextButton: 'Next',
  submitButton: 'Launch instance',
  optional: 'optional'
};

export const multiselectStrings: MultiselectProps.I18nStrings = {
  tokenLimitShowFewer: 'Show fewer',
  tokenLimitShowMore: 'Show more',
};
