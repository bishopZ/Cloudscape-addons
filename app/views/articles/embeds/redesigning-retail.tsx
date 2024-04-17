import { Container, SpaceBetween } from '@cloudscape-design/components';
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
    <SpaceBetween size="m">
      <h2>What</h2>
      <p>
        I wrote this article for the Insights section of the Karsh Hagan website. It discusses the significant changes occurring in the retail industry as stores reopen after the COVID-19 pandemic. While social distancing measures are at the forefront of everyone's minds, retailers must also prioritize creating a safe and comfortable shopping experience for customers. The article highlights how retail has evolved beyond experiential marketing into education marketing, with touchless door entry and anti-microbial floor mats becoming customer expectations.
      </p>
      <p>
        I note that traditional retail spaces were not designed with social distancing in mind, and therefore, stores must adapt to accommodate the new mandates. For example, adding arrows on the floor to indicate the direction customers should walk can help maintain social distance, but it also changes the shopping metaphor of the store. The article emphasizes that retailers must prioritize both safety and comfort in their designs to see increased customer lift.
      </p>
      <p>
        <ExternalLink href="https://karshhagan.com/insights/redesigning-retail">
          Read the article
        </ExternalLink>
      </p>
      <h2>Why</h2>
      <p>
        This article is advocating for a shift towards experiential retail, where every part of the store becomes an immersive experience that combines shopping, entertainment, and education. By doing so, retail establishments can create a more enjoyable and memorable shopping experience for customers, while also meeting their new expectations for safety, convenience, and personalized interactions.
      </p>
    </SpaceBetween>
  </Container>;
};
