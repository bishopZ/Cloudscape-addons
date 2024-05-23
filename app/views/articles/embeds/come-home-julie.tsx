import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

export const ComeHomeJulie = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug ?? ''));

  return <Container media={makeHeaderImage(article?.image ?? '')}>
    <SpaceBetween size="s">
      <h2>What</h2>
      <p>
        A music video for "Come Home Baby Julie, Come Home" by the late, Austin-based indie rock band, American Analog Set. World premier at the RESfest opening screening of SIGGRAPH 2004 in the Egyptian Theater, Los Angeles.
      </p>
      <p>
        <ExternalLink href="https://www.youtube.com/watch?v=1ifdpAE9Ggk">
          Watch the Video
        </ExternalLink>
      </p>
      <h2>Who</h2>
      <p>
        Producer: Rory Koehane
        <br />
        Lead Animator: Ryan Hovenweep
        <br />
        Other animators include: Bishop Zareh and Nick Campbell
      </p>
      <p>
        Software: Adobe Illustrator, Adobe After Effects, Lightwave 3D
      </p>
      <h2>Why</h2>
      <p>
        It was a labor of love. Eleven months of animating for the sheer joy of it,
        and a world premier in LA.
      </p>
    </SpaceBetween>
  </Container>;
};
