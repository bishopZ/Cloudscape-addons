import { ContentLayout, Header } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingSpinner } from '/addons/details/loading';
import { deslugify } from '/addons/helpers/string-utils';
import { initArticles, selectArticles } from '/data/articles';
import { useAppDispatch, useAppSelector } from '/data/data-store';
import type { CONTENT_KEYS } from '/utils/content-map';
import { CONTENT_MAP } from '/utils/content-map';

const getArticle = (slug?: CONTENT_KEYS) => {
  if (!slug) return null;
  return CONTENT_MAP[slug];
};

export const DocsContainer = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { initialized } = useAppSelector(selectArticles);
  const ArticleComponent = getArticle(params.slug as CONTENT_KEYS);

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

