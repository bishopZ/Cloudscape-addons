import { Box, ColumnLayout } from '@cloudscape-design/components';
import React from 'react';

import { LabeledValue } from '/addons/details/labeled-value';
import { Dash, LoadingSpinner } from '/addons/details/loading';

export const LoadingPreview = () => {
  return <ColumnLayout borders="horizontal" columns={2}>
    <Box variant="p">
      Often times, on a details or dashboard page, you will have key-value pairs.
      These show a label and a value.
    </Box>
    <LabeledValue label="Instance option">
      active
    </LabeledValue>
    <Box variant="p">
      The LoadingSpinner can be used when the data is in the process of being fetched
      from an API or other data source.
    </Box>
    <LabeledValue label="Instance option">
      <LoadingSpinner mediaName="instance" />
    </LabeledValue>
    <Box variant="p">
      Dash can be used when the value was fetched, but doesn't exist.
    </Box>
    <LabeledValue label="Instance option">
      <Dash />
    </LabeledValue>
  </ColumnLayout>;
};
