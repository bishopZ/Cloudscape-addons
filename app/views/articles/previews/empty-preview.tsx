import { Box, ColumnLayout } from '@cloudscape-design/components';
import React from 'react';

import { GenericEmpty, NoMatch } from '/addons/tables/generic-empty';

export const EmptyPreview = () => {
  return <ColumnLayout columns={2}>
    <Box textAlign="center">
      <GenericEmpty />
    </Box>
    <Box textAlign="center">
      <NoMatch clear={() => {}} />
    </Box>
  </ColumnLayout>;
};
