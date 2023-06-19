import type { SelectProps } from '@cloudscape-design/components';
import { Box, FormField, Icon, Link, Multiselect, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react';

import {
  deselectAriaLabel, errorIconAriaLabel, filteringAriaLabel, filteringClearAriaLabel, filteringPlaceholder,
  finishedText, loadingText, recoveryText, selectedAriaLabel
} from '/addons/helpers/a11y-helpers';
import { formfieldStrings, multiselectStrings } from '/addons/helpers/i18n-helpers';
import { addOptional, makeCounter } from '/addons/helpers/string-utils';
import type { MultiselectChange, SelectLoad } from '/addons/helpers/type-helpers';

type Props = {
  onChange: (event: MultiselectChange) => void
  empty: React.ReactNode
  label?: React.ReactNode
  options?: SelectProps.Option[]
  selectedOptions?: SelectProps.Option[]
  placeholder?: string
  noMatch?: React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  tokenLimit?: number
  status?: 'pending' | 'loading' | 'finished' | 'error'
  filteringType?: SelectProps.FilteringType
  stretch?: boolean
  optional?: boolean
  disabled?: boolean
  expand?: boolean
  onBlur?: () => void
  onFocus?: () => void
  onLoadItems?: (event: SelectLoad) => void
}

export const LabeledMultiselect = (props: Props) => {
  const [hidden, setHidden] = useState(false);

  const {
    label = <>&nbsp;</>,
    options = [],
    selectedOptions = [],
    empty = 'No options',
    noMatch = 'No matches',
    filteringType = 'none',
    status = 'finished',
    optional = false,
    tokenLimit,
    placeholder, constraint, description, error, info, secondaryControl,
    stretch, disabled, expand,
    onBlur, onFocus, onChange, onLoadItems,
  } = props;

  const displayLabel = optional
    ? addOptional(label)
    : label;

  return <FormField
    label={displayLabel}
    constraintText={constraint}
    description={description}
    errorText={error}
    info={info}
    secondaryControl={secondaryControl}
    stretch={stretch}
    i18nStrings={formfieldStrings}>
    <SpaceBetween size="m">
      <Multiselect
        options={options}
        selectedOptions={selectedOptions}
        hideTokens={hidden}
        filteringType={filteringType}
        statusType={status}
        tokenLimit={tokenLimit}
        ariaRequired={!optional}
        disabled={disabled}
        expandToViewport={expand}
        placeholder={placeholder}
        empty={empty}
        noMatch={noMatch}
        deselectAriaLabel={deselectAriaLabel}
        errorIconAriaLabel={errorIconAriaLabel}
        filteringAriaLabel={filteringAriaLabel}
        filteringClearAriaLabel={filteringClearAriaLabel}
        filteringResultsText={makeCounter}
        filteringPlaceholder={filteringPlaceholder}
        finishedText={finishedText}
        loadingText={loadingText}
        recoveryText={recoveryText}
        selectedAriaLabel={selectedAriaLabel}
        i18nStrings={multiselectStrings}
        virtualScroll={options.length > 500}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        onLoadItems={onLoadItems}
      />
      <Box>
        <Link onFollow={() => { setHidden(!hidden) }}>
          <Icon name={hidden ? 'caret-down' : 'caret-up'} />
          {hidden
            ? multiselectStrings.tokenLimitShowMore
            : multiselectStrings.tokenLimitShowFewer}
        </Link>
      </Box>
    </SpaceBetween>
  </FormField>;
};
