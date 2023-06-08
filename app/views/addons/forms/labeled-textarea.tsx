import { FormField, Textarea } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from '../helpers/i18n-helpers';
import { addOptional } from '../helpers/string-utils';
import type { InputChange, KeyDetail } from '../helpers/type-helpers';

type Props = {
  value: string
  onChange: (event: InputChange) => void
  rows?: number
  label?: React.ReactNode
  placeholder?: string
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  autoComplete?: string | boolean
  spellcheck?: boolean
  stretch?: boolean
  optional?: boolean
  disabled?: boolean
  readOnly?: boolean
  onBlur?: () => void
  onFocus?: () => void
  onKeyDown?: (event: KeyDetail) => void
  onKeyUp?: (event: KeyDetail) => void
}

export const LabeledTextarea = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    optional = false,
    value, rows,
    placeholder, constraint, description, error, info, secondaryControl,
    stretch, autoComplete, disabled, readOnly, spellcheck,
    onBlur, onFocus, onChange, onKeyDown, onKeyUp,
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
    <Textarea
      value={value}
      ariaRequired={!optional}
      autoComplete={autoComplete}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      spellcheck={spellcheck}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    />
  </FormField>;
};
