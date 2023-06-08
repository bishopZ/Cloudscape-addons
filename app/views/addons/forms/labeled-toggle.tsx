import { FormField, Toggle } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from '../helpers/i18n-helpers';
import { addOptional } from '../helpers/string-utils';
import type { ToogleChange } from '../helpers/type-helpers';

type Props = {
  checked: boolean
  onChange: (event: ToogleChange) => void
  children: React.ReactNode | React.ReactNode[]
  label?: React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  optional?: boolean
  stretch?: boolean
  disabled?: boolean
  onBlur?: () => void
  onFocus?: () => void
}

export const LabeledToggle = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    optional = false,
    checked, children,
    constraint, description, error, info, secondaryControl,
    stretch, disabled,
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
    <Toggle
      checked={checked}
      disabled={disabled}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}>
      {children}
    </Toggle>
  </FormField>;
};
