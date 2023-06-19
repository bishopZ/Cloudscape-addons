import { ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { LabeledValue } from '/addons/details/labeled-value';
import { Dash } from '/addons/details/loading';
import { formatDate } from '/addons/helpers/string-utils';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const ArticleDetails = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  return <Container header={<Header variant="h2">Details</Header>}>
    <ColumnLayout columns={3} borders="vertical">
      <SpaceBetween size="m">
        <LabeledValue label="Vendor">{article?.vendor ?? <Dash />}</LabeledValue>
        <LabeledValue label="Discipline">{article?.discipline ?? <Dash />}</LabeledValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        <LabeledValue label="Type">{article?.format ?? <Dash />}</LabeledValue>
        <LabeledValue label="Topic">{article?.topic ?? <Dash />}</LabeledValue>
        <LabeledValue label="Section">{article?.section ?? <Dash />}</LabeledValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        <LabeledValue label="Author">Bishop Zareh</LabeledValue>
        <LabeledValue label="Last edited">{formatDate(article?.publicationDate)}</LabeledValue>
      </SpaceBetween>
    </ColumnLayout>
  </Container>;
};
