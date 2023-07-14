import { Box, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

export const Footer = () => {
  return <footer>
    <Box display="inline-block" margin={Spacing.VerticalL}>
      <SpaceBetween size="s" direction="horizontal">
        <Link href="" external>
        Feedback
        </Link>
        <Link href="" external>
        Privacy
        </Link>
      </SpaceBetween>
    </Box>
    <Box float="right" margin={Spacing.VerticalL} display="inline-block">
  &copy; 2023 TODO All Rights Reserved.
      <br />This site uses essential cookies.
    </Box>
  </footer>;
};
