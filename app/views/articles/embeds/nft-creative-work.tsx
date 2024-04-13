
import { Container, SpaceBetween } from '@cloudscape-design/components';
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
    <SpaceBetween size='m'>
      <h2>What</h2>
      <p>
        This article discusses how Non-Fungible Tokens (NFTs) are being used to protect digital artworks and creative works in various industries, including art, music, and entertainment. NFTs are unique digital assets that are stored on a blockchain, providing a tamper-proof and transparent record of ownership. They offer a new ownership model for digital art, allowing artists to sell exclusive rights to their work and receive payment in the form of cryptocurrency. This article provides an in-depth look at the potential benefits and challenges of using NFTs to protect creative works, and highlights the innovative ways in which this technology is transforming the art world.
      </p>
      <p><ExternalLink href="https://karshhagan.com/insights/using-nfts-to-protect-creative-works">
        Read the article
      </ExternalLink></p>
      <h2>Why</h2>
      <p>Blockchain brings technological innovation to many parts of our economy
        resistant to change and still adapting to the last round of disruptions.
        But how will Blockchain and NFTs be used in the advertising industry?</p>
    </SpaceBetween>
  </Container>;
};
