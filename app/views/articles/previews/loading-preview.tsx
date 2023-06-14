import { Box, ColumnLayout } from '@cloudscape-design/components';
import React from 'react';

import { KeyValue } from '/addons/details/key-value';
import { Dash, LoadingSpinner } from '/addons/details/loading';

export const LoadingPreview = () => {
  return <ColumnLayout borders="horizontal" columns={2}>
    <Box variant="p">
      Often times, on a details or dashboard page, you will have key-value pairs.
      These show a label and a value.
    </Box>
    <KeyValue label="Instance option">
      active
    </KeyValue>
    <Box variant="p">
      The LoadingSpinner can be used when the data is in the process of being fetched
      from an API or other data source.
    </Box>
    <KeyValue label="Instance option">
      <LoadingSpinner mediaName="instance" />
    </KeyValue>
    <Box variant="p">
      Dash can be used when the value was fetched, but doesn't exist.
    </Box>
    <KeyValue label="Instance option">
      <Dash />
    </KeyValue>
  </ColumnLayout>;
};
