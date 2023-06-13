import { ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { KeyValue } from '/addons/details/key-value';
import { Dash } from '/addons/details/loading';
import { formatDate } from '/addons/helpers/string-utils';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const DocsDetails = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  return <Container header={<Header variant="h2">Details</Header>}>
    <ColumnLayout columns={2}>
      <SpaceBetween size="m">
        <KeyValue label="Author">Bishop Zareh</KeyValue>
        <KeyValue label="Last edited">{formatDate(article?.publicationDate)}</KeyValue>
        <KeyValue label="Section">{article?.section ?? <Dash />}</KeyValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        <KeyValue label="Github link">
          <ExternalLink href="https://github.com">source code</ExternalLink>
        </KeyValue>
        <KeyValue label="License">
          <ExternalLink href="https://github.com">MIT</ExternalLink>
        </KeyValue>
      </SpaceBetween>
    </ColumnLayout>
  </Container>;
};
