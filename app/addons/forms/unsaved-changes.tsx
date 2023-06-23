import { Alert, Box, Button, Modal, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

type Props = {
  visible: boolean
  onDismiss: () => void
  onConfirm: () => void
}

export const UnsavedChangesModal = (props: Props) => {
  const {
    visible,
    onDismiss, onConfirm
  } = props;

  const Footer = () => <Box variant="span" float="right">
    <SpaceBetween size="s" direction="horizontal">
      <Button onClick={onDismiss} variant="link">
        Cancel
      </Button>
      <Button onClick={onConfirm} variant="primary">
        Leave
      </Button>
    </SpaceBetween>
  </Box>;

  return <Modal
    visible={visible}
    header={'Unsaved changes'}
    onDismiss={onDismiss}
    footer={<Footer />}>
    <Alert type="warning">
      You have unsaved changes. If you leave now, your changes will be lost. Continue?
    </Alert>
  </Modal>;
};
