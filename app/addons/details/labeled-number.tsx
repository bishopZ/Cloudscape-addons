import type { BoxProps } from '@cloudscape-design/components';
import { Box, FormField } from '@cloudscape-design/components';
import React from 'react';

import { formfieldStrings } from '../helpers/i18n-helpers';
import { Dash, LoadingSpinner } from './loading';

type Props = {
  label: React.ReactNode
  number?: number | React.ReactNode
  status?: 'info' | 'error' | 'success' | 'inactive'
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
    label, number, status,
    constraint, description, error, info, secondaryControl,
    stretch,
  } = props;

  let color: BoxProps.Color = 'text-status-info';
  switch (status) {
    case 'error': color = 'text-status-error'; break;
    case 'success': color = 'text-status-success'; break;
    case 'inactive': color = 'text-status-inactive'; break;
  }

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
      fontSize={loading ? undefined : 'display-l'}
      color={color}>
      {loading
        ? <LoadingSpinner />
        : number ?? <Dash />}
    </Box>
  </FormField>;
};
