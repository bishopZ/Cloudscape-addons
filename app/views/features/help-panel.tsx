import { Box, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const HelpPanelContent = () => {
  return <HelpPanel header={<Box variant="h2">What is this?</Box>}>
    <SpaceBetween size="s">
      <Box variant="p">
      Cloudscape Addons is an exciting addition to
        <ExternalLink href="https://cloudscape.design/">Amazon's Cloudscape design system</ExternalLink>.
      </Box>
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
      {/* <Box variant="p">
      A few of the addons also require Redux Toolkit.
      </Box>
      <ul>
        <li>Redux v4</li>
        <li>Redux Toolkit v1</li>
      </ul> */}
      <Header variant="h2">About Stellar Elements</Header>
      <Box variant="p">
      Stellar Elements is an unconsultancy. We diagnose and execute.
      </Box>
      <Box variant="p">
      Technically, we're a global design and digital development organization.
      </Box>
      <Box variant="p">
      Are we a design studio? Yes.
        <br />Are we a development shop? Indeed.
        <br />A systems integrator? Absolutely.
      </Box>
      <Box variant="p">
      We are all of it and more. We removed the distance between thinking and doing
      by putting all of the skills needed to create brilliant experiences under one roof.
      </Box>
      <Box variant="p">

      That's how we make creating great experiences, a better experience.
      </Box>
    </SpaceBetween>
  </HelpPanel>;
};
