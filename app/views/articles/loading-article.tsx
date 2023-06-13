import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';

import { LoadingPreview } from './loading-preview';

export const LoadingArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll()
    }, 0)  
  }, [])

  return <SpaceBetween size="m">
    <Container
      header={<Header variant="h2">
      Introducing Dash
      </Header>}>
      <Box variant="p">
        Cloudscape addon's proudly announces this stunning piece of code!
      </Box>
      <pre><code className="language-javascript">
        {`export const Dash = () => <>&ndash;</>;`} 
      </code></pre>
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
      <pre><code className="language-javascript">
        {`import { Spinner } from '@cloudscape-design/components';
import React from 'react';

export const Dash = () => <>&ndash;</>;

type Props = { mediaName?: string }

export const LoadingSpinner = ({ mediaName }: Props) => <>
  <Spinner />
  <>&nbsp;</>
  Loading {mediaName ?? ''}
</>;
`} 
      </code></pre>
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
