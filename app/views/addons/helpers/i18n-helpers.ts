import type {
  FlashbarProps, FormFieldProps, MultiselectProps, TagEditorProps,
} from '@cloudscape-design/components';

import * as Labels from './a11y-helpers';

export const formfieldStrings: FormFieldProps.I18nStrings = {
  errorIconAriaLabel: Labels.errorIconAriaLabel
};

export const multiselectStrings: MultiselectProps.I18nStrings = {
  tokenLimitShowFewer: 'Hide selected',
  tokenLimitShowMore: 'Show selected',
};

export const ariaLabels: FlashbarProps.I18nStrings = {
  ariaLabel: 'Notifications',
  notificationBarAriaLabel: 'View all notifications',
  notificationBarText: 'Notifications',
  errorIconAriaLabel: 'Error',
  warningIconAriaLabel: 'Warning',
  successIconAriaLabel: 'Success',
  infoIconAriaLabel: 'Info',
  inProgressIconAriaLabel: 'In progress'
};

////

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

// AttributeEditorProps.I18nStrings {
//   errorIconAriaLabel?: string
//   itemRemovedAriaLive?: string
//   removeButtonAriaLabel?: (item: T) => string
// }

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

// export const uploadStrings: FileUploadProps.I18nStrings = {
//   uploadButtonText: e => e ? 'Choose files' : 'Choose file',
//   dropzoneText: e => e ? 'Drop files to upload' : 'Drop file to upload',
//   removeFileAriaLabel: e => `Remove file ${e + 1}`,
//   limitShowFewer: 'Show fewer files',
//   limitShowMore: 'Show more files',
//   errorIconAriaLabel: 'Error'
// };
