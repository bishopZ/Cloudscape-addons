import { ColumnLayout, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { LabeledValue } from '/addons/details/labeled-value';
import { Dash } from '/addons/details/loading';
import { formatDate } from '/addons/helpers/string-utils';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const DocsDetails = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  return <Container header={<Header variant="h2">Details</Header>}>
    <ColumnLayout columns={2} borders="vertical">
      <SpaceBetween size="m">
        <LabeledValue label="Author">Bishop Zareh</LabeledValue>
        <LabeledValue label="Publication date">{formatDate(article?.publicationDate)}</LabeledValue>
        <LabeledValue label="Section">{article?.section ?? <Dash />}</LabeledValue>
      </SpaceBetween>
      <SpaceBetween size="m">
        {article?.referenceComponent && article.referenceLink
          && <LabeledValue label="Reference component">
            <ExternalLink href={article.referenceLink}>
              {article.referenceComponent}
            </ExternalLink>
          </LabeledValue>}
        {/* <LabeledValue label="Github">
          <ExternalLink href="https://github.com">source code</ExternalLink>
        </LabeledValue>
        <LabeledValue label="License">
          <ExternalLink href="https://github.com">MIT</ExternalLink>
        </LabeledValue> */}
      </SpaceBetween>
    </ColumnLayout>
  </Container>;
};
