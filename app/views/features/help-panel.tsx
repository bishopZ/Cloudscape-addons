import { Box, Button, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const HelpPanelContent = () => {
  return <HelpPanel
    header={<Box variant="h2">What is this?</Box>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        TODO
      </Box>
      <Header variant="h3">Created by <br />Bishop Z</Header>
    </SpaceBetween>
  </HelpPanel>;
};
