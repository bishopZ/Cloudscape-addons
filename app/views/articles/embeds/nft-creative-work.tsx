import { Container } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const NftCreativeWork = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <Container media={{ content:
    <img src={article?.image} alt="" />
  }}>
    <h2>What</h2>
    <p>I wrote this article about NFTs for the Insights section of Karsh Hagan's website.</p>
    <p><ExternalLink href="https://karshhagan.com/insights/using-nfts-to-protect-creative-works">
      Read the article
    </ExternalLink></p>
    <h2>Who</h2>
    <p>Bishop Zareh</p>
    <h2>Why</h2>
    <p>Blockchain brings technological innovation to many parts of our economy
      resistant to change and still adapting to the last round of disruptions.
      But how will Blockchain and NFTs be used in the advertising industry?</p>
  </Container>;
};
