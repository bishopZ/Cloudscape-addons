import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { tenets } from './tenets-data';

export const TenetsPage = () => {
  return <SpaceBetween size="l">
    {tenets.map((tenet, index) =>
      <Container
        key={index}
        header={
          <Header variant="h2">
            {tenet.title}
          </Header>
        }>
        {tenet.content}
      </Container>
    )}
  </SpaceBetween>;
};
