import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { ExternalLink } from '/addons/details/external-link';
import { LoadingSpinner } from '/addons/details/loading';
import { SourceCodeSection } from '/views/common/source-code-section';

import { PreviewHeader } from '../../common/headers/preview-header';
import { LoadingPreview } from '../previews/loading-preview';

export const LoadingArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <Container
      media={{
        content:
      <img
        src="assets/chasm.jpg"
        alt="placeholder"
      />,
        height: 200,
        position: 'top'
      }}
      header={<Header variant="h2">
      Introducing Dash
      </Header>}>
      <SpaceBetween size="s">
        <Box variant="p">
          Cloudscape Addon's proudly announces this stunning piece of code!
        </Box>
        <pre><code className="language-javascript">
          {'export const Dash = () => <>&ndash;</>;'}
        </code></pre>
        <Box variant="p">
          The Dash component isn't about fancy code. Of course, a developer can
          write {'&ndash;'} instead of {'<Dash />'}, but that requires every developer on
          the project to remember the difference between {'&ndash;'} and {'&mdash;'}, and
          make a decision of which to use, every time they encounter the problem.
        </Box>
        <Box variant="p">
          Instead, decide one time, as a team, then write a component like Dash,
          so that the same solution is used every time.
        </Box>
        <Box variant="p">
          Dash is especially useful on details pages when not every item has a
          value for every detail being shown. The Dash component becomes the
          vocabulary word for "no value exists."
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing LoadingSpinner
      </Header>}>
      <SpaceBetween size="s">
        <Box><LoadingSpinner /></Box>
        <Box variant="p">
        LoadingSpinner also doesn't have much to it.
        Cloudscape already provides a
          <ExternalLink href="https://cloudscape.design/components/spinner/">
          Spinner component.
          </ExternalLink>
        LoadingSpinner simply adds the word "Loading" and adds an
        optional media name. It's designed as the generic interface for
        the state of your app while data is being fetched.
        </Box>
        <pre><code className="language-javascript">{`export const LoadingSpinner = ({ mediaName }: Props) => <>
  <Spinner />
  <>&nbsp;Loading {mediaName ?? ''}</>
</>;`}</code></pre>
      </SpaceBetween>
    </Container>
    <SourceCodeSection source={`import { Spinner } from '@cloudscape-design/components';
import React from 'react';

export const Dash = () => <>&ndash;</>;

type Props = { mediaName?: string }

export const LoadingSpinner = ({ mediaName }: Props) => <>
  <Spinner />
  <>&nbsp;Loading {mediaName ?? ''}</>
</>;`} />
    <Container header={<PreviewHeader />}>
      <LoadingPreview />
    </Container>
  </SpaceBetween>;
};
