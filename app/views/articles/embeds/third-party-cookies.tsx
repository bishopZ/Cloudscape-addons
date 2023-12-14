import { Container } from '@cloudscape-design/components';
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
    <h2>What</h2>
    <p>I co-authored this article about the current state of Cookies and how it relates to SEO.</p>
    <p><ExternalLink href="https://karshhagan.com/insights/why-are-third-party-cookies-going-away">
      Read the article
    </ExternalLink></p>
    <h2>Who</h2>
    <p>David Stewart<br />Bishop Zareh<br />Parker Webber</p>
    <h2>Why</h2>
    <p>Why has data privacy remained the hottest topic in digital marketing over
      the past 18 months? And why is the third party cookie on the chopping block?
      Well, for one, according to Pew Research, 79% of consumers feel concerned
      about how companies are using the data they collect about them.</p>
    <p>And this isn&rsquo;t news to most of us marketers. We&rsquo;ve known for
      years that consumers, once made aware, do not generally approve of the
      tracking advertisers use to target them. They&rsquo;ve called data collection
      practices into question, and now it&rsquo;s our job, as marketing professionals
      who target them, to listen to their concerns.</p>
  </Container>;
};
