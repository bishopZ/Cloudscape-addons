import { Alert, Box, Button, Modal } from '@cloudscape-design/components';
import React from 'react';

type Props = {
  visible: boolean
  onDismiss: () => void
  onLeave: () => void
}

export const UnsavedChanges = (props: Props) => {
  const {
    visible,
    onDismiss, onLeave
  } = props;

  return <Modal
    visible={visible}
    header={'Unsaved changes'}
    onDismiss={onDismiss}
    footer={
      <Box
        variant="span"
        float="right">
        <Button
          onClick={onDismiss}
          variant="link">
          Cancel
        </Button>
        <Button
          onClick={onLeave}
          variant="primary">
          Leave
        </Button>
      </Box>
    }>
    <Alert type="warning">
      You have unsaved changes. If you leave, your changes will be lost. Continue?
    </Alert>
  </Modal>;
};
