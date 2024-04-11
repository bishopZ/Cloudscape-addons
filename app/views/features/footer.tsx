import { Box, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

export const Footer = () => {
  return <footer>
    <Box float="right" margin={Spacing.VerticalL} display="inline-block">
      &copy;2024 Bishop Zareh, All Rights Reserved
      <br />This site only uses essential cookies
    </Box>
  </footer>;
};
