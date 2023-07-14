import { Box } from '@cloudscape-design/components';
import React, { memo } from 'react';

const LabeledContent = () => {
  return <Box variant="p">
    Over the coming months, Cloudscape Addons will release similar Labeled
    components for other form fields. These labeled components set
    smart default, and provide a unified interface across all form field types.
  </Box>;
};

export default memo(LabeledContent);
