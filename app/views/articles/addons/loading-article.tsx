import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { LoadingSpinner } from '/addons/details/loading';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

import { PreviewHeader } from '../../common/headers/preview-header';
import { LoadingPreview } from '../previews/loading-preview';

export const LoadingArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <SourceCodeSection source={`import { Spinner } from '@cloudscape-design/components';
import React from 'react';

export const Empty = () => <>&ndash;</>;

type Props = { mediaName?: string }

export const LoadingSpinner = ({ mediaName }: Props) => <>
  <Spinner />
  <>&nbsp;Loading {mediaName ?? ''}</>
</>;`} />
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">
      Introducing Empty
      </Header>}>
      <SpaceBetween size="s">
        <Box variant="p">
          Cloudscape Addon's proudly announces this stunning piece of code!
        </Box>
        <pre><code className="language-javascript">
          {'export const Empty = () => <>&ndash;</>;'}
        </code></pre>
        <Box variant="p">
          The Empty component isn't about writing fancy code. Of course, any developer can easily
          write <code className="language-javascript">{'&ndash;'}</code> instead
          of <code className="language-javascript">{'<Empty />'}</code>,
          but that requires every developer on
          the project to remember the difference
          between <code className="language-javascript">{'&ndash;'}</code> and
          &nbsp;<code className="language-javascript">{'&mdash;'}</code>, and
          make a decision of which to use, each time they encounter the problem.
          Instead, decide one time, as a team, then write a component like Empty,
          so that the same solution is used every time.
        </Box>
        <Box variant="p">
          Empty is especially useful on details pages when not every item has a
          value. The Empty component becomes the design system's vocabulary word
          for "no value exists."
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
        LoadingSpinner simply adds the word "Loading" and an
        optional media name. It's designed as the generic interface for
        the state of your app while data is in-transit.
        </Box>
        <pre><code className="language-javascript">{`export const LoadingSpinner = ({ mediaName }: Props) => <>
  <Spinner />
  <>&nbsp;Loading {mediaName ?? ''}</>
</>;`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container header={<PreviewHeader />}>
      <LoadingPreview />
    </Container>
  </SpaceBetween>;
};
