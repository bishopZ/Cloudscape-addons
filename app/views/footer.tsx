import { Box, Link } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '../addons/helpers/spacing-constants';

export const Footer = () => {
  return <footer style={{ borderColor: 'black' }}>
    <Box margin={Spacing.M} float="left">
      <Link href="#/contributors">
        Contributors
      </Link>
      <>&nbsp;|&nbsp;</>
      <Link href="#/contributors">
        Contact
      </Link>
      <>&nbsp;|&nbsp;</>
      <Link href="/terms">
        Site terms
      </Link>
      <>&nbsp;|&nbsp;</>
      <Link href="/privacy">
        Privacy
      </Link>
      <>&nbsp;|&nbsp;</>
      <Link href="#/contributors" external>
        Stellar Elements
      </Link>
    </Box>
    <Box margin={Spacing.M} float="right">
      <>&copy;&nbsp;2023 Stellar Elements, Inc. All rights reserved.</>
      <br />
      <>This site uses essential cookies.</>
    </Box>
  </footer>;
};
