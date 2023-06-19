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
      The documentation was written using Cloudscape with these tools.
    </Box>
    <ul>
      <li>Cloudscape components v3</li>
      <li>Cloudscape collection hooks v1</li>
      <li>Cloudscape design tokens v3</li>
      <li>Cloudscape global styles v1</li>
      <li>React v18</li>
      <li>Typescript v5</li>
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
