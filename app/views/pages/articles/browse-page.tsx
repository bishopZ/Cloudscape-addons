import { Button, Cards, Header } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { cardLabels, loadingText } from '/addons/helpers/a11y-helpers';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';
import { changePreference } from '/data/preferences';

import { CARD_DEFINITIONS } from './card-definitions';

const cardsPerRow = [
  { cards: 1 },
  { minWidth: 420, cards: 2 },
  { minWidth: 910, cards: 3 },
  { minWidth: 1240, cards: 4 },
  { minWidth: 1940, cards: 5 },
];

export const BrowseArticles = () => {
  const dispatch = useAppDispatch();
  const { initialized, items: articles } = useAppSelector(selectArticles);
  const sortedArticles = [...articles];
  sortedArticles.sort((a, b) => {
    if (a.publicationDate < b.publicationDate) return 1;
    if (a.publicationDate > b.publicationDate) return -1;
    return 0;
  });

  useEffect(() => {
    if (!initialized) void dispatch(initArticles);
  }, [initialized]);

  if (!initialized) return <LoadingSpinner />;

  return <>
    <Cards
      stickyHeader
      cardsPerRow={cardsPerRow}
      cardDefinition={CARD_DEFINITIONS}
      loading={!initialized}
      loadingText={loadingText}
      items={sortedArticles}
      totalItemsCount={sortedArticles.length}
      variant="full-page"
      ariaLabels={cardLabels('title')}
      header={
        <Header
          variant="h1"
          // description="I'm looking for new opportunities!"
          info={<Button
            variant="link"
            onClick={() => {
              dispatch(changePreference({
                name: 'tools',
                value: 'open'
              }));
            }}>
          info
          </Button>}
          actions={<Link to="/search">
            <Button variant="primary" iconName="search">
              Search
            </Button>
          </Link>}>
          Browse
        </Header>
      }
    />
    {/* <Alert header="I'm looking for new opportunities!" /> */}
  </>;
};
