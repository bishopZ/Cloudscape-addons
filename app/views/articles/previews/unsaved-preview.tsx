import { Box, Button } from '@cloudscape-design/components';
import React, { useState } from 'react';

import { UnsavedChangesModal } from '/addons/forms/unsaved-changes';

export const UnsavedPreview = () => {
  const [visible, setVisible] = useState(false);

  return <Box textAlign="center">
    <UnsavedChangesModal
      visible={visible}
      onDismiss={() => { setVisible(false) }}
      onConfirm={() => { setVisible(false) }}
    />
    <Button
      variant="primary"
      onClick={() => { setVisible(true) }}>
      Click me
    </Button>
  </Box>;
};
