import { Container } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const RedesigningRetail = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <Container media={{ content:
    <img src={article?.image} alt="" />
  }}>
    <h2>What</h2>
    <p>Article about changes in the retal industry for Insights section of Karsh Hagan's website.</p>
    <p><ExternalLink href="https://karshhagan.com/insights/redesigning-retail">
      Read the article
    </ExternalLink></p>
    <h2>Why</h2>
    <p>Even as retail establishments begin to open back up, one of the first
      things on everyone&rsquo;s mind is social distancing. Wearing a mask or
      not, everyone is painfully aware of precautions, both mandated and
      personal. Stores can open their doors, but the retail experience will
      never be the same.</p>
  </Container>;
};
