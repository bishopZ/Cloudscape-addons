import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

import { PreviewHeader } from '../../common/headers/preview-header';
import { EmptyPreview } from '../previews/empty-preview';

/* eslint-disable max-lines-per-function, max-len */
export const EmptyArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <SourceCodeSection source={`import { Box, Button, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

type Props = {
  title?: string
  description?: string
  buttonName?: string
  onClick?: () => void
}

export const GenericEmpty = (props: Props) => {
  const {
    title = 'No items',
    description = 'No items to show.',
    buttonName = 'Refresh',
    onClick = () => { window.location.reload() }
  } = props;

  return <SpaceBetween size="s">
    <Box
      margin={Spacing.TopM}
      fontWeight="bold">
      {title}
    </Box>
    <Box>
      {description}
    </Box>
    <Box margin={Spacing.TopS}>
      <Button onClick={onClick}>
        {buttonName}
      </Button>
    </Box>
  </SpaceBetween>;
};

type NoMatchProps = {
  clear: () => void
}

export const NoMatch = ({ clear }: NoMatchProps) => <GenericEmpty
  title="No matches"
  description="We couldn't find a match."
  buttonName="Clear filter"
  onClick={() => { clear() }}
/>;`} />
    <Container
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">
      Introducing GenericEmpty
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          GenericEmpty is the first component we've released in the Table category.
          Tables are one of the most beautiful and powerful components in
          Cloudscape. However, the table feature each require some configuration.
        </Box>
        <Box variant="p">
          Tables frequently use the&nbsp;
          <ExternalLink href="https://cloudscape.design/get-started/dev-guides/collection-hooks/">
            Collection Hooks
          </ExternalLink> to manage the collection of items shown in the table.
          The configuration of the collection requires you to define two states.
          What should be shown when the table has no items, called "empty state,"
          and what should be shown if the customer filtered the table, and there are
          no matches for the current filter, called "no match".
        </Box>
        <Box variant="p">
          Cloudscape's recommendation provide some standard design for those states.
          The GenericEmpty component simply codes up the recommended patterns into
          a re-usable component with smart defaults.
        </Box>
        <pre><code className="language-javascript">
          {`title = 'No items',
description = 'No items to show.',
buttonName = 'Refresh',
onClick = () => { window.location.reload() }`}</code></pre>
        <Box variant="p">
          Cloudscape's standard for both empty and no match states is to have a
          title, description and a button that provides a continuation. The
          default continuation provided by Addons is to refresh the browser window.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
      Introducing NoMatch
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          The NoMatch component is a simple variation of the GenericEmpty conponent.
          It simply changes the text defaults and provide a prop for the clear
          filter function that is made by the Collection Hooks.
        </Box>
        <pre><code className="language-javascript">
          {`export const NoMatch = ({ clear }: NoMatchProps) => <GenericEmpty
  title="No matches"
  description="We couldn't find a match."
  buttonName="Clear filter"
  onClick={() => { clear() }}
/>;`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Implementation example
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          Both components can be used with the Collection Hooks like this.
        </Box>
        <pre><code className="language-javascript">
          {`import { useCollection } from '@cloudscape-design/collection-hooks';
import { Table, TextFilter } from '@cloudscape-design/components';

const collectionSettings = {
  filtering: {
    empty: <GenericEmpty />,
    noMatch: <NoMatch clear={() => { actions.setFiltering('') }} />,
  }
};

const {
  actions, filterProps
} = useCollection(unfilteredItems, collectionSettings);

return <Table
  {...collectionProps}
  filter={<TextFilter {...filterProps} />}
/>`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container header={<PreviewHeader />}>
      <EmptyPreview />
    </Container>
  </SpaceBetween>;
};
