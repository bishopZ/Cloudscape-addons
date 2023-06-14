import { ColumnLayout } from '@cloudscape-design/components';
import React from 'react';

import { LabeledNumber } from '/addons/details/labeled-number';

export const NumberPreview = () => {
  return <ColumnLayout columns={4}>
    <LabeledNumber label="Unique visitors" number={'14k'} />
    <LabeledNumber
      label="Messages sent"
      description="Over the last year."
      number={'120'}
      status="success"
    />
    <LabeledNumber
      label="Pending transactions"
      status="inactive"
      constraint="Inactive pending verification."
    />
    <LabeledNumber
      label="Errors"
      status="error"
      number={'1'}
      loading
      error="Pending errors need attention."
    />
  </ColumnLayout>;
};
