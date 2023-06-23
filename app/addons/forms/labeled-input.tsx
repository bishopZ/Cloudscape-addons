import type { InputProps } from '@cloudscape-design/components';
import { FormField, Input } from '@cloudscape-design/components';
import React from 'react';

import { clearAriaLabel } from '/addons/helpers/a11y-helpers';
import { formfieldStrings } from '/addons/helpers/i18n-helpers';
import { addOptional } from '/addons/helpers/string-utils';
import type { InputChange, InputKeyDetail } from '/addons/helpers/type-helpers';

type Props = {
  value: string
  onChange: (event: InputChange) => void
  mode?: keyof typeof modeMap
  placeholder?: string
  label?: React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  stretch?: boolean
  optional?: boolean
  disabled?: boolean
  readOnly?: boolean
  autoComplete?: boolean
  spellcheck?: boolean
  step?: number
  onBlur?: () => void
  onFocus?: () => void
  onKeyDown?: (event: InputKeyDetail) => void
  onKeyUp?: (event: InputKeyDetail) => void
}

type Map = Record<string, [InputProps.Type, InputProps.InputMode]>

const modeMap: Map = {
  text: ['text', 'text'],
  password: ['password', 'text'],
  search: ['search', 'search'],
  decimal: ['number', 'decimal'],
  number: ['number', 'numeric'],
  tel: ['text', 'tel'],
  email: ['email', 'email'],
  url: ['url', 'url']
};

export const LabeledInput = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    mode = 'text',
    placeholder = 'Enter a value',
    step = 1,
    optional = false,
    value,
    constraint, description, error, info, secondaryControl,
    disabled, stretch, readOnly, autoComplete, spellcheck,
    onBlur, onFocus, onChange, onKeyDown, onKeyUp
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
    <Input
      value={value}
      ariaRequired={!optional}
      autoComplete={autoComplete}
      clearAriaLabel={clearAriaLabel}
      disabled={disabled}
      type={modeMap[mode][0]}
      inputMode={modeMap[mode][1]}
      placeholder={placeholder}
      readOnly={readOnly}
      spellcheck={spellcheck}
      step={step}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    />
  </FormField>;
};
