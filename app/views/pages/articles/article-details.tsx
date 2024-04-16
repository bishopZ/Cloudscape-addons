import { ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { LabeledValue } from '/addons/details/labeled-value';
import { formatDate, inNotEmpty } from '/addons/helpers/string-utils';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const ArticleDetails = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

  return <SpaceBetween size="m">
    <Container header={<Header variant="h2">Details</Header>}>
      <ColumnLayout columns={3} borders="vertical">
        <SpaceBetween size="m">
          <LabeledValue label="Discipline">
            {inNotEmpty(article?.discipline)}
          </LabeledValue>
          <LabeledValue label="Vendor">
            {inNotEmpty(article?.vendor)}
          </LabeledValue>
        </SpaceBetween>
        <SpaceBetween size="m">
          <LabeledValue label="Type">
            {inNotEmpty(article?.format)}
          </LabeledValue>
          <LabeledValue label="Topic">
            {inNotEmpty(article?.topic)}
          </LabeledValue>
          <LabeledValue label="Section">
            {inNotEmpty(article?.section)}
          </LabeledValue>
        </SpaceBetween>
        <SpaceBetween size="m">
          <LabeledValue label="Author">
            {article?.author ?? 'Bishop Zareh'}
          </LabeledValue>
          <LabeledValue label="Publication date">
            {formatDate(article?.publicationDate)}
          </LabeledValue>
        </SpaceBetween>
      </ColumnLayout>
    </Container>
  </SpaceBetween>;
};
