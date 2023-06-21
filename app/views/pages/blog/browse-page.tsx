import type { CardsProps } from '@cloudscape-design/components';
import { Alert, Button, Cards, Header, Icon, Link } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { Dash, LoadingSpinner } from '/addons/details/loading';
import { cardLabels, loadingText } from '/addons/helpers/a11y-helpers';
import { getRelativeTime } from '/addons/helpers/string-utils';
import type { Article } from '/data/articles';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';

const CARD_DEFINITIONS: CardsProps.CardDefinition<Article> = {
  header: item =>
    <Link fontSize="heading-m" href={`#/blog/${item.slug}`}>
      {item.title}
    </Link>,
  sections: [
    {
      id: 'image',
      content: item => <div className="card-image">
        <img
          src={item.image === ''
            ? 'assets/chasm.jpg'
            : item.image}
          alt={item.title}
        />
      </div>
    },
    { id: 'description',
      header: 'Description',
      content: item => item.description,
    }, {
      id: 'publicationDate',
      header: 'Published',
      content: item => getRelativeTime(item.publicationDate),
      width: 33
    }, {
      id: 'topic',
      header: 'Topic',
      content: item => item.topic ?? <Dash />,
      width: 33
    }, {
      id: 'section',
      header: 'Section',
      content: item => item.section ?? <Dash />,
      width: 33
    }],
};

const carddsPerRow = [
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
      cardsPerRow={carddsPerRow}
      cardDefinition={CARD_DEFINITIONS}
      loading={!initialized}
      loadingText={loadingText}
      items={sortedArticles}
      totalItemsCount={sortedArticles.length}
      variant="full-page"
      ariaLabels={cardLabels('title')}
      header={<Header
        variant="h1"
        actions={<Link href="#/blog/search">
          <Button variant="primary" iconName="search">
          Search
          </Button>
        </Link>}>
      Articles
      </Header>}
    />
    <Alert>New articles every two weeks!</Alert>
  </>;
};
