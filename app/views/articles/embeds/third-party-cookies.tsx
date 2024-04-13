import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const ThirdPartyCookies = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <Container media={{ content:
    <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size='m'>
      <h2>What</h2>
      <p>
        I co-authored this article about the current state of Cookies and how it relates to SEO. It discusses how data privacy has remained a hot topic in digital marketing over the past 18 months, with 79% of consumers expressing concern about how companies collect and use their personal data. This concern has led to the third-party cookie being placed on the chopping block, as consumers are increasingly aware of and opposed to tracking advertisements that use cookies to target them.
      </p>
      <p>
        Overall, the article highlights the importance of data privacy and the need for marketers to prioritize consumer trust and consent in their use of cookies and other data collection tools.
      </p>
      <p><ExternalLink href="https://karshhagan.com/insights/why-are-third-party-cookies-going-away">
        Read the article
      </ExternalLink></p>
      <h2>Who</h2>
      <p>David Stewart<br />Bishop Zareh<br />Parker Webber</p>
      <h2>Why</h2>
      <p>
        As marketing professionals, it is important for us to take note of these concerns and adapt our strategies accordingly. The article suggests that it is time for marketers to listen to consumer concerns and adjust their data collection practices to ensure they are using data in a responsible and ethical manner.
      </p>
    </SpaceBetween>
  </Container>;
};
