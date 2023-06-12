import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { CodeDisplay } from '/addons/details/code-display';

export const A11yHelpers = () => {
  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">Tenets</Header>}>
      <ul>
        <li>Tenet 1</li>
        <li>Tenet 2</li>
      </ul>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing the a11y helpers
      </Header>}>
      <Box variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </Box>
      <CodeDisplay
        height={100}
        value={'{\r\n  "test": "some code"\r\n}\r\n'}
      />
      <Box variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </Box>
    </Container>
  </SpaceBetween>;
};
