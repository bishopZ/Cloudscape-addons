import { Box, FormField } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from './helpers/i18n-helpers';
import { Dash, LoadingSpinner } from './loading';

type Props = {
  label: React.ReactNode
  number?: number | React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  stretch?: boolean
  loading?: boolean
}

export const LabeledNumber = (props: Props) => {
  const {
    loading = false,
    label,
    number,
    constraint,
    description,
    error,
    info,
    secondaryControl,
    stretch,
  } = props;

  return <FormField
    label={label}
    constraintText={constraint}
    description={description}
    errorText={error}
    info={info}
    secondaryControl={secondaryControl}
    stretch={stretch}
    i18nStrings={formfieldStrings}>
    <Box
      fontSize="display-l"
      color="text-status-info">
      {loading
        ? <LoadingSpinner />
        : number ?? <Dash />}
    </Box>
  </FormField>;
};
