import { Box, ColumnLayout, Container, Grid, Header, Link, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { LabeledValue } from '/addons/details/labeled-value';
import { formatDate, inNotEmpty } from '/addons/helpers/string-utils';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

const gridDefinition = [
  { colspan: { xxs: 12, xs: 4, s: 3 } },
  { colspan: { xxs: 12, xs: 8, s: 9 } }
];

export const ArticleDetails = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  return <SpaceBetween size="m">
    <Container header={<Header variant="h2">Article author</Header>}>
      <Grid gridDefinition={gridDefinition}>
        <div className="card-image-wide">
          <img src="assets/chasm.jpg" style={{ }} alt="article author" />
        </div>
        <div>
          <Header variant="h3">About [author name]</Header>
          <Box variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
          <Box variant="p">[author link]</Box>
        </div>
      </Grid>
    </Container>
    <Container header={<Header variant="h2">Details</Header>}>
      <ColumnLayout columns={3} borders="vertical">
        <SpaceBetween size="m">
          <LabeledValue label="Discipline">
            <Link href={`#/blog/search/${article?.discipline}`}>
              {inNotEmpty(article?.discipline)}
            </Link>
          </LabeledValue>
          <LabeledValue label="Vendor">
            <Link href={`#/blog/search/${article?.vendor ?? ''}`}>
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
    </Container>
  </SpaceBetween>;
};
