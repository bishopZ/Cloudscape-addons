import { FormField, Tiles } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from '../helpers/i18n-helpers';
import { addOptional } from '../helpers/string-utils';
import type { TileChange, TileItems } from '../helpers/type-helpers';

type Props = {
  value: string | null
  items: TileItems
  onChange: (event: TileChange) => void
  label?: string
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  columns?: number
  optional?: boolean
  stretch?: boolean
}

export const LabeledTiles = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    value, columns, items,
    constraint, description, error, info, secondaryControl,
    optional, stretch,
    onChange,
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
    <Tiles
      value={value}
      items={items}
      columns={columns}
      ariaRequired={!optional}
      onChange={onChange}
    />
  </FormField>;
};
