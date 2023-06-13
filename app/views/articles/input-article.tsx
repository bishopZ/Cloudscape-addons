import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { CodeDisplay } from '/addons/details/code-display';
import { ExternalLink } from '/addons/details/external-link';

export const InputArticle = () => {
  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
      Introducing LabeledInput
      </Header>}>
      <Box variant="p">
        The LabeledInput component is the first of a series of Labeled components.
        Input boxes can be used for many things and all design systems aim to be
        versitile, so that the components can be used in any situation.
      </Box>
      <Box variant="p">
        However, the vast majority of uses of an
        <ExternalLink href="">Input component</ExternalLink>
        is in the context of a form.
        When an Input is in a form, it should have a label to comply with
        accessibility and usablity best practices. Labels are provided by the
        <ExternalLink href="">FormField component</ExternalLink>.
      </Box>
      <Box variant="p">
        Since the main use of an Input is in combination with a FormField, we
        present the Labeled component as a unified interface for Inputs in the
        context of a form.
      </Box>
      <Box variant="p">
        Over the coming months, Cloudscape Addons will release similar Labeled
        components for other form fields. These labeled components set
        smart default, and provide a unified interface across all form field types.
      </Box>
    </Container>
    <Container
      header={
        <Header variant="h2">Source code</Header>
      }>
      <CodeDisplay value="" />
    </Container>
  </SpaceBetween>;
};
