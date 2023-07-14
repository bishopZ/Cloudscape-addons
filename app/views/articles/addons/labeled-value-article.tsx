import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

export const LabeledValueArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <SourceCodeSection source={`import { Box } from '@cloudscape-design/components';
import React from 'react';

type KeyValueProps = {
  label: React.ReactNode
  children: React.ReactNode
}

export const LabeledValue = ({ label, children }: KeyValueProps) =>
  <Box>
    <Box variant="awsui-key-label">{label}</Box>
    <Box>{children}</Box>
  </Box>;`} />
    <Container
      media={makeHeaderImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png')}
      header={<Header variant="h2">
      Introducing LabeledValue
      </Header>}>
      <SpaceBetween size="s">
        <Box variant="p">
          In contrast to many of the other Labeled components, Labeled value
          doesn't wrap a form field. A labeled value is primarily used on a
          Details page and can be seen in the "Details" section below. The
          LabeledValue component is agnostic to the type of the value,
          but it is most commonly used with a string or a link.
        </Box>
        <Box variant="p">
          It involves a small amount of code, and it's mostly taken from
          the <ExternalLink href="https://cloudscape.design/components/key-value-pairs/">
            Key-value pairs
          </ExternalLink> component. We changed the name to be consistent with
          the naming of the other Addons.
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
