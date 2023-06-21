import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { UnsavedPreview } from '/views/articles/previews/unsaved-preview';
import { PreviewHeader } from '/views/common/headers/preview-header';
import { SourceCodeSection } from '/views/common/source-code-section';

export const UnsavedArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
        Introducing UnsavedChangesModal
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          Perhaps the most comprehensive and well-thought-out components in
          Cloudscape is
          the <ExternalLink href="https://cloudscape.design/components/wizard/">Wizard component.</ExternalLink> Ask
          any UX designer how a Wizard
          should be designed and they will talk your ear off. The Wizard pattern
          has been with us for decades and Cloudscape's Wizard goes a long ways
          toward proving out the lessons learned over that time.
        </Box>
        <Box variant="p">
          In the documentation for the Wizard component they offer some recommendations
          that also apply to most forms pages. If the user changes a value, then
          navigates to another page, then their changes will be lost.
          Users should be alerted to this situation before the changes are lost.
          Cloudscape's documentation recommends use of a modal to let the user
          know they have unsaved changes. But, the documentation doesn't
          actually provide the code for this modal.
        </Box>
      </SpaceBetween>
    </Container>
    <SourceCodeSection source={`import { Alert, Box, Button, Modal, SpaceBetween } from '@cloudscape-design/components';
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
        Exit
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
};`} />
    <Container header={<PreviewHeader />}>
      <UnsavedPreview />
    </Container>
  </SpaceBetween>;
};
