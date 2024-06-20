import { Box } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

export const Footer = () => {
  return <footer>
    <Box float="right" margin={Spacing.VerticalL} display="inline-block">
      Creative Commons Zero (CC0)
      <br />This site only uses essential cookies.
    </Box>
  </footer>;
};
