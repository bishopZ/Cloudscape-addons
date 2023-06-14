import { Box, HelpPanel } from '@cloudscape-design/components';
import React from 'react';

export const HelpPanelContent = () => {
  return <HelpPanel header={<Box variant="h2">What is this?</Box>}>
    <Box variant="p">
      Cloudscape Addons is an exciting addition to Amazon's Cloudscape design system.
    </Box>
    <br />
    <Box variant="strong">Assumptions</Box>
    <Box variant="p">
      The documentation assumes you are using Cloudscape with these tools.
    </Box>
    <ul>
      <li>React v18</li>
      <li>Typescript v5</li>
      <li>Cloudscape v3</li>
    </ul>
    <Box variant="p">
      A few of the addons also require Redux Toolkit.
    </Box>
    <ul>
      <li>Redux v4</li>
      <li>Redux Toolkit v1</li>
    </ul>
  </HelpPanel>;
};
