import { Box, HelpPanel } from '@cloudscape-design/components';
import React from 'react';

export const HelpPanelContent = () => {
  return <HelpPanel header={<Box variant="h2">What is this?</Box>}>
    <Box variant="p">
      Cloudscape Addons is an exciting addition to Amazon's Cloudscape design system.
    </Box>
  </HelpPanel>;
};
