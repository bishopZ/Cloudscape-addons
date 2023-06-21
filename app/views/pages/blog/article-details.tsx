import { ColumnLayout, Container, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { LabeledValue } from '/addons/details/labeled-value';
import { formatDate, inNotEmpty } from '/addons/helpers/string-utils';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const ArticleDetails = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  return <Container header={<Header variant="h2">Details</Header>}>
    <ColumnLayout columns={3} borders="vertical">
      <SpaceBetween size="m">
        <LabeledValue label="Discipline">
          <Link href={`#/blog/search/${article?.discipline}`}>
            {inNotEmpty(article?.discipline)}
          </Link>
        </LabeledValue>
        <LabeledValue label="Vendor">
          <Link href={`#/blog/search/${article?.vendor}`}>
            {inNotEmpty(article?.vendor)}
          </Link>
        </LabeledValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        <LabeledValue label="Type">
          <Link href={`#/blog/search/${article?.format}`}>
            {inNotEmpty(article?.format)}
          </Link>
        </LabeledValue>
        <LabeledValue label="Topic">
          <Link href={`#/blog/search/${article?.topic}`}>
            {inNotEmpty(article?.topic)}
          </Link>
        </LabeledValue>
        <LabeledValue label="Section">
          <Link href={`#/blog/search/${article?.section}`}>
            {inNotEmpty(article?.section)}
          </Link>
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
  </Container>;
};
