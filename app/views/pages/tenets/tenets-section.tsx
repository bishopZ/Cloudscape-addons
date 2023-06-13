import { Container, Header, Icon } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

import { tenets } from './tenets-data';

export const TenetsSection = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  if (!article?.tenets || article?.tenets.length < 1) return <></>;

  return <Container
    header={
      <Header variant="h2">
        <>Tenets</>
        <>&nbsp;</>
        <Icon name="suggestions" size="medium" />
      </Header>
    }>
    <ul>
      {article.tenets.map((id, index) => <>
        <li key={index}>
          <strong>{tenets[id].title}</strong> - {tenets[id].description}
        </li>
      </>)}
    </ul>
  </Container>;
};
