import { FormField, RadioGroup } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from '../helpers/i18n-helpers';
import { addOptional } from '../helpers/string-utils';
import type { RadioChange, RadioItems } from '../helpers/type-helpers';

type Props = {
  value: string | null
  items: RadioItems
  onChange: (event: RadioChange) => void
  label?: string
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  optional?: boolean
  stretch?: boolean
}

export const LabeledRadioGroup = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    optional = false,
    value, items,
    constraint, description, error, info, secondaryControl,
    stretch,
    onChange
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
    <RadioGroup
      value={value}
      items={items}
      ariaRequired={!optional}
      onChange={onChange}
    />
  </FormField>;
};
