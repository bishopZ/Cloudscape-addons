import type { SelectProps } from '@cloudscape-design/components';
import { FormField, Select } from '@cloudscape-design/components';
import React from 'react';

import {
  errorIconAriaLabel, filteringAriaLabel, filteringClearAriaLabel, filteringPlaceholder, finishedText, loadingText,
  recoveryText, selectedAriaLabel
} from '../helpers/a11y-helpers';
import { formfieldStrings } from '../helpers/i18n-helpers';
import { addOptional, makeCounter } from '../helpers/string-utils';
import type { SelectChange, SelectLoad } from '../helpers/type-helpers';


type Props = {
  onChange: (event: SelectChange) => void
  empty: React.ReactNode
  label?: React.ReactNode
  options?: SelectProps.Option[]
  selectedOption?: SelectProps.Option
  placeholder?: string
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  noMatch?: React.ReactNode
  secondaryControl?: React.ReactNode
  filteringType?: SelectProps.FilteringType
  status?: 'pending' | 'loading' | 'finished' | 'error'
  triggerVariant?: SelectProps.TriggerVariant
  stretch?: boolean
  optional?: boolean
  disabled?: boolean
  expand?: boolean
  onBlur?: () => void
  onFocus?: () => void
  onLoadItems?: (event: SelectLoad) => void
}

export const LabeledSelect = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    options = [],
    selectedOption = null,
    status = 'finished',
    filteringType = 'none',
    placeholder = 'Select an option',
    empty = 'No options',
    noMatch = 'No matches',
    optional = false,
    triggerVariant,
    constraint, description, error, info, secondaryControl,
    stretch, disabled, expand,
    onBlur, onFocus, onChange, onLoadItems,
  } = props;

  const displayLabel = optional
    ? addOptional(label)
    : label;

  return <>
    <FormField
      label={displayLabel}
      constraintText={constraint}
      description={description}
      errorText={error}
      info={info}
      secondaryControl={secondaryControl}
      stretch={stretch}
      i18nStrings={formfieldStrings}>
      <Select
        placeholder={placeholder}
        options={options}
        selectedOption={selectedOption ?? null}
        statusType={status}
        filteringType={filteringType}
        ariaRequired={!optional}
        disabled={disabled}
        expandToViewport={expand}
        empty={empty}
        noMatch={noMatch}
        triggerVariant={triggerVariant}
        selectedAriaLabel={selectedAriaLabel}
        errorIconAriaLabel={errorIconAriaLabel}
        filteringAriaLabel={filteringAriaLabel}
        filteringClearAriaLabel={filteringClearAriaLabel}
        filteringResultsText={makeCounter}
        filteringPlaceholder={filteringPlaceholder}
        finishedText={finishedText}
        loadingText={loadingText}
        recoveryText={recoveryText}
        virtualScroll={options.length > 500}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        onLoadItems={onLoadItems}
      />
      {/* TODO refresh button */}
    </FormField>
  </>;
};
