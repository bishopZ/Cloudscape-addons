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
      This library assumes you are using Cloudscape with the tools listed below.
    </Box>
    <ul>
      <li>React</li>
      <li>Typescript</li>
      <li>Redux Toolkit</li>
    </ul>
  </HelpPanel>;
};
