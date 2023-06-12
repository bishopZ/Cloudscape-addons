import { ContentLayout, Header } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { deslugify } from '/addons/helpers/string-utils';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';

import { A11yHelpers } from '../views/articles/a11y-helpers';

const articleMap = {
  'a11y-helpers': A11yHelpers
} as const;

const getArticle = (slug?: keyof typeof articleMap) => {
  if (!slug) return null;
  return articleMap[slug];
};

export const ArticleContainer = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { initialized } = useAppSelector(selectArticles);
  const ArticleComponent = getArticle(params.slug as keyof typeof articleMap);

  useEffect(() => {
    if (!initialized) void dispatch(initArticles);
  }, [initialized]);

  return <ContentLayout
    header={<Header variant="h1">
      {deslugify(params.slug as string)}
    </Header>}>
    {!initialized && <LoadingSpinner />}
    {initialized && ArticleComponent && <ArticleComponent />}
  </ContentLayout>;
};

