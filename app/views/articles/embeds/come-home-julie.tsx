import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { ExternalLink } from '/addons/details/external-link';

export const ComeHomeJulie = () => {
  return <Container
    media={{ content: <iframe
      title="YouTube video of the music video, 'Come Home Baby Julie, Come Home'"
      src="https://www.youtube.com/embed/1ifdpAE9Ggk?si=j1rs3ApnnkLBSLS-"
    /> }}>
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
