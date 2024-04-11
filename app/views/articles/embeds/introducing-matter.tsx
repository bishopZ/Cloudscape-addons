
import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const Matter = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <Container media={{ content:
    <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size='m'>
      <h2>What</h2>
      <p>
        I lead a small engineering team on a tight schedule to publish volume 1 of the MATTER website.
        The site is an internal effort by Stellar Elements to provoke conversation around topics that
        will be relevant for years to come.
      </p>
      <p><ExternalLink href="//matter.stellarelements.com">
        See the site
      </ExternalLink></p>
      <h2>Who</h2>
      <p>
        <ExternalLink href="//matter.stellarelements.com/meet-the-team">Meet the team</ExternalLink>
      </p>
      <h2>Why</h2>
      <p>
        Most websites are either a product or a marketing effort. Product sites are mostly behind a
        paywall, thus they don't care about SEO. Marketing sites want all the visual splendor, and SEO,
        but often neglect concerns like Accessibility and Code Quality.
      </p>
      <p>
        Since MATTER, was positioned as a "thought leadership" website, we wanted it to represent the
        best of both worlds. MATTER is a website where design, content and engineering are all turned
        up to 11.
      </p>
      <p>
        For instance, it is very rare for an animated website to also respect the "prefers reduce motion"
        preference in the operating system. The preference is there for users that really need it.
        MATTER respects both this preference and light/dark mode.
      </p>
    </SpaceBetween>
  </Container>;
}