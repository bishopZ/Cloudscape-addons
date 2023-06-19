import { Checkbox, FormField } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from '/addons/helpers/i18n-helpers';
import { addOptional } from '/addons/helpers/string-utils';
import type { CheckboxChange } from '/addons/helpers/type-helpers';

type Props = {
  checked: boolean
  onChange: (event: CheckboxChange) => void
  children: React.ReactNode
  label?: React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  stretch?: boolean
  optional?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onBlur?: () => void
  onFocus?: () => void
}

export const LabeledCheckbox = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    optional = false,
    checked, children,
    constraint, description, error, info, secondaryControl,
    stretch, disabled, indeterminate,
    onBlur, onFocus, onChange,
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
    <Checkbox
      checked={checked}
      ariaRequired={!optional}
      disabled={disabled}
      indeterminate={indeterminate}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}>
      {children}
    </Checkbox>
  </FormField>;
};
