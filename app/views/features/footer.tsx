import { Box, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '../../addons/helpers/spacing-constants';

export const Footer = () => {
  return <footer>
    <Box margin={Spacing.M} float="left">
      <SpaceBetween size="m" direction="horizontal">
        <Link href="#/contact">
          Contact
        </Link>
        <Link href="https://www.stellarelements.com/privacy-policy" external>
          Privacy
        </Link>
        <Link href="https://stellarelements.com" external>
          Stellar Elements
        </Link>
      </SpaceBetween>
    </Box>
    <Box margin={Spacing.M} float="right">
      <>&copy;&nbsp;2023 Stellar Elements. All Rights Reserved.</>
      <br />
      <>This site uses essential cookies.</>
    </Box>
  </footer>;
};
