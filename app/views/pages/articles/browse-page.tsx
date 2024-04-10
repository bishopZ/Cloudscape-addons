import type { CardsProps } from '@cloudscape-design/components';
import { Alert, Box, Button, Cards, Header, Icon, Link } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { Dash, LoadingSpinner } from '/addons/details/loading';
import { cardLabels, loadingText } from '/addons/helpers/a11y-helpers';
import { getRelativeTime } from '/addons/helpers/string-utils';
import type { Article } from '/data/articles';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';
import { changePreference } from '/data/preferences';

const CARD_DEFINITIONS: CardsProps.CardDefinition<Article> = {
  header: item =>
    <Link fontSize="heading-m" href={`#/articles/${item.slug}`}>
      {item.title}
    </Link>,
  sections: [
    {
      id: 'image',
      content: item => <Link href={`#/articles/${item.slug}`}>
        <div className="card-image">
          <img
            src={item.image === ''
              ? 'assets/chasm.jpg'
              : item.image}
            alt={item.title}
          />
        </div>
      </Link>
    },
    { id: 'description',
      header: '',
      content: item => <Box fontSize="body-m">
        {item.description}
      </Box>,
    }, {
      id: 'publicationDate',
      header: 'Published',
      content: item => <Box fontSize="body-s" color="text-body-secondary">
        {getRelativeTime(item.publicationDate)}
      </Box>,
      width: 33
    }, {
      id: 'discipline',
      header: 'Discipline',
      content: item => <Box fontSize="body-s" color="text-body-secondary">
        {item.discipline ?? <Dash />}
      </Box>,
      width: 33
    }, {
      id: 'format',
      header: 'Format',
      content: item => <Box fontSize="body-s" color="text-body-secondary">
        {item.format ?? <Dash />}
      </Box>,
      width: 33
    }],
};

const cardsPerRow = [
  { cards: 1 },
  { minWidth: 420, cards: 2 },
  { minWidth: 910, cards: 3 },
  { minWidth: 1240, cards: 4 },
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
          // description="New articles every two weeks."
          info={<Link onFollow={() => {
            dispatch(changePreference({
              name: 'tools',
              value: 'open'
            }));
          }}>
          info
          </Link>}
          // actions={<Link href="#/articles/search">
          //   <Button variant="primary" iconName="search">
          //     Search
          //   </Button>
          // </Link>}
        >
          Browse articles
        </Header>
      }
    />
    {/* <Alert header="New articles every two weeks!" /> */}
  </>;
};
