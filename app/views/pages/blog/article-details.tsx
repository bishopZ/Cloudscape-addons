import { ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { KeyValue } from '/addons/details/key-value';
import { Dash } from '/addons/details/loading';
import { formatDate } from '/addons/helpers/string-utils';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const ArticleDetails = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  return <Container header={<Header variant="h2">Details</Header>}>
    <ColumnLayout columns={3}>
      <SpaceBetween size="m">
        <KeyValue label="Author">Bishop Zareh</KeyValue>
        <KeyValue label="Vendor">{article?.vendor ?? <Dash />}</KeyValue>
        <KeyValue label="Discipline">{article?.discipline ?? <Dash />}</KeyValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        <KeyValue label="Format">{article?.format ?? <Dash />}</KeyValue>
        <KeyValue label="Topic">{article?.topic ?? <Dash />}</KeyValue>
        <KeyValue label="Section">{article?.section ?? <Dash />}</KeyValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        <KeyValue label="Last edited">{formatDate(article?.publicationDate)}</KeyValue>
      </SpaceBetween>
    </ColumnLayout>
  </Container>;
};
