import { ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { deslugify } from '/addons/helpers/string-utils';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';
import type { CONTENT_KEYS } from '/utils/content-map';
import { CONTENT_MAP } from '/utils/content-map';

import { ArticleDetails } from './article-details';

const getArticle = (slug?: CONTENT_KEYS) => {
  if (!slug) return null;
  return CONTENT_MAP[slug];
};

export const ArticleContainer = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { initialized } = useAppSelector(selectArticles);
  const ArticleComponent = getArticle(params.slug as CONTENT_KEYS);
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug); // TODO move to the reducer

  useEffect(() => {
    if (!initialized) void dispatch(initArticles);
  }, [initialized]);

  return <ContentLayout
    header={<Header variant="h1">
      {article?.title ?? deslugify(params.slug as string)}
    </Header>}>
    {!initialized && <LoadingSpinner />}
    {initialized && <SpaceBetween size="m">
      {!initialized && <LoadingSpinner />}
      {initialized && ArticleComponent && <ArticleComponent />}
      <ArticleDetails />
    </SpaceBetween>}
  </ContentLayout>;
};

