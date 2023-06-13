import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { CodeDisplay } from '/addons/details/code-display';
import { ExternalLink } from '/addons/details/external-link';

import { LoadingPreview } from './loading-preview';

export const LoadingArticle = () => {
  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
      Introducing Dash
      </Header>}>
      <Box variant="p">
        Cloudscape addon's proudly announces this stunning piece of code!
      </Box>
      <CodeDisplay
        value={'export const Dash = () => <>&ndash;</>;'}
        height={50}
      />
      <Box variant="p">
        The Dash component isn't about fancy code. Of course a developer can
        write {'&ndash;'} instead of {'<Dash />'}, but that requires every developer on
        the project, to remember the difference between {'&ndash;'} and {'&mdash;'} and
        make a decision of which to use.
      </Box>
      <Box variant="p">
        Instead, decide one time as a team, then write a component like Dash,
        so that the same solution is used every time.
      </Box>
    </Container>
    <Container
      header={<Header variant="h2">
      Introducing LoadingSpinner
      </Header>}>
      <Box variant="p">
        LoadingSpinner is also doesn't have much to it.
        Cloudscape already provides a
        <ExternalLink href="https://cloudscape.design/components/spinner/">
          Spinner component.
        </ExternalLink>
        LoadingSpinner simply adds the work "Loading" to it and adds an
        optional media name. It can be used as the generic interface for
        the state of your app while data is being fetched.
      </Box>
      <CodeDisplay
        value={`
import { Spinner } from '@cloudscape-design/components';\r\n
\r\n
type Props = { mediaName?: string }\r\n
\r\n
export const LoadingSpinner = ({ mediaName }: Props) => <>\r\n
  <Spinner />\r\n
  <>&nbsp;</>\r\n
  Loading {mediaName ?? ''}\r\n
</>;\r\n`}
        height={195}
      />
      <Box variant="p">
        The Dash component isn't about fancy code. Of course a developer can
        write {'&ndash;'} instead of {'<Dash />'}, but that requires every developer on
        the project, to remember the difference between {'&ndash;'} and {'&mdash;'} and
        make a decision of which to use.
      </Box>
      <Box variant="p">
        Instead, decide one time as a team, then write a component like Dash,
        so that the same solution is used every time.
      </Box>
    </Container>
    <Container header={<Header variant="h2">Preview</Header>}>
      <LoadingPreview />
    </Container>
  </SpaceBetween>;
};
