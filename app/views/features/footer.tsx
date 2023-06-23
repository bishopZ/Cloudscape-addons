import { Box, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

export const Footer = () => {
  return <footer>
    <Box display="inline-block" margin={Spacing.VerticalL}>
      <SpaceBetween size="s" direction="horizontal">
        <Link href="https://www.stellarelements.com/contact" external>
        Feedback
        </Link>
        <Link href="https://www.stellarelements.com/privacy-policy" external>
        Privacy
        </Link>
      </SpaceBetween>
    </Box>
    <Box float="right" margin={Spacing.VerticalL} display="inline-block">
  &copy; 2023 Stellar Elements. All Rights Reserved.
      <br />This site uses essential cookies.
    </Box>
  </footer>;
};
