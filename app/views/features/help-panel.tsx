import { Box, Button, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const HelpPanelContent = () => {
  return <HelpPanel
    header={<Box variant="h2">What is this?</Box>}
    footer={<Box>
      <Button
        href="https://stellarelements.com/work"
        target="_blank"
        iconName="external"
        iconAlign="right"
        variant="primary">
        See our work
      </Button>
    </Box>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        Cloudscape Addons is an exciting addition to
        <ExternalLink href="https://cloudscape.design/">Amazon's Cloudscape design system.</ExternalLink>
      </Box>
      <Header variant="h3">Created by <br />Stellar Elements</Header>
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
