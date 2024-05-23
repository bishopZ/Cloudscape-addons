import { Container, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';

export const FourthScreen = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug ?? ''));

  return <Container media={{
    content: <img src={article?.image} alt="" />
  }}>
    <SpaceBetween size="s">
      <h2>What</h2>
      <p>
        This article highlights the importance of screen readers in responsive web design and advocates for their inclusion as the 'fourth screen' to ensure digital accessibility and enhance user experiences for visually impaired individuals.
      </p>
      <p>
        Traditionally, developers have focused on ensuring websites and applications work well on desktop, mobile, and tablet screens. However, the article argues that the often-overlooked screen reader should be considered the fourth essential screen in web design. Screen readers are not just assistive devices but an integral part of the browsing experience for many users with visual impairments.
      </p>
      <p><ExternalLink href="https://www.biopticcoder.com/the-4th-screen-making-screen-readers-part-of-your-front-end-design/">
        Read the article on Bioptic Coder
      </ExternalLink></p>
      <h2>Who</h2>
      <p><strong>
        <ExternalLink href="https://www.linkedin.com/in/ericglasser/">Eric Glasser</ExternalLink>
      </strong></p>
      <p>
        Eric Glasser is a seasoned software engineer with over a decade of experience at the intersection of technology and business. Recognized for his expertise in full stack development, Eric consistently delivers top-tier solutions that catalyze business growth. With a strong focus on developer experience, accessibility, and sustainable software architectures, he is deeply passionate about creating technology that opens doors for all.
      </p>
      <h2>Why</h2>
      <p>
        Developers can make screen readers a priority by testing their work using these tools and treating screen reader compatibility as more than just a compliance checkbox. By gaining firsthand experience navigating websites with a screen reader, developers can identify and rectify issues that might otherwise be missed, ultimately improving the overall user experience for all users.
      </p>
      <p>
        By embracing screen readers as an integral part of frontend design, we can create digital landscapes that are accessible and inclusive to all users, regardless of how they access the web. The principles that make a site more accessible for screen reader users often result in simpler navigation, clearer content hierarchy, and more descriptive links and buttons, benefiting everyone.
      </p>
    </SpaceBetween>
  </Container>;
};
