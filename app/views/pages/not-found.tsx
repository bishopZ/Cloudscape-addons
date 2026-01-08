import { Alert, Box, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const NotFound = () => {
  return <ContentLayout
    header={
      <Header variant="h1">Nothing here</Header>
    }>
    <SpaceBetween size="l">
      <Alert
        header={'404 Not found'}
        type="warning">
        The content you requested could not be found.
      </Alert>
      <Box>
        If you believe something should be here, please contact&nbsp;
        <ExternalLink href="mailto:support@bishopz.com">
          support@bishopz.com.
        </ExternalLink>
      </Box>
    </SpaceBetween>
  </ContentLayout>;
};
