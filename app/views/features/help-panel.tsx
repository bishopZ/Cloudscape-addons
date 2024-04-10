import { Box, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React, { memo } from 'react';

export const HelpPanelContent = () => {
  return <HelpPanel
    header={<Box variant="h2">What is this?</Box>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        When we first came to this domain, we built BishopZ.com version 1.
        And sadly, it sank into the swamp.
      </Box>
      <Box variant="p">
        But then...
        <br />then we built BishopZ.com version 2,
        and it also sank into the swamp.
      </Box>
      <Box variant="p">
        But then...
        <br />Then we built BishopZ.com version 3, and
        it burned down...
        <br />and then sank into the swamp.
      </Box>
      <Box variant="p">
        But version 4...
        <br />version 4 is all for you,
        and some day, all that you see will be yours.
      </Box>
      <Box variant="p">
        (What? You mean the curtains? What do I want with the curtains?)
      </Box>
    </SpaceBetween>
  </HelpPanel>;
};

export default memo(HelpPanelContent);
