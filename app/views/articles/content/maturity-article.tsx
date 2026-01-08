import { Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExternalLink } from '/addons/details/external-link';
import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

export const MaturityArticle = () => {
  const params = useParams();
  const item = useAppSelector(selectArticle(params.slug ?? ''));

  return <Container
    media={makeHeaderImage(item?.image ?? '')}
    header={
      <Header variant="h2">
        Fostering the growth and evolution of your design system
      </Header>
    }>
    <SpaceBetween size="xs">
      <p>
        The journey towards maturity for your design system is not an overnight process; instead, it involves a strategic cycle that encompasses three crucial steps: educate, engage, and evolve.
      </p>
      <h3>Step 1: Educate &mdash; igniting the spark</h3>
      <p>
        Education plays a pivotal role in unlocking the true potential of your design system. Begin by articulating its core purpose &mdash; to streamline the design process, ensure consistency across projects, and promote collaboration among teams. Communicate the tangible benefits, such as time savings, improved productivity, and more unified brand experiences.
      </p>
      <p>
        Cast a compelling vision that inspires your colleagues to embrace the system. This may involve conducting workshops, creating demos, or presenting case studies that demonstrate its value. Engage in open conversations about any concerns, answering questions, and addressing apprehensions. Cultivate a shared understanding of the design system's role in streamlining the creative process.
      </p>
      <h3>Step 2: Engage &mdash; building a collaborative community</h3>
      <p>
        Embrace collaboration as a cornerstone of your design system's growth. Foster a two-way dialogue with its users &mdash; designers, developers, and stakeholders alike. Encourage feedback, suggestions, and open discussions about how to optimize the system for their needs. By actively listening, you demonstrate a commitment to creating a tool that genuinely addresses their pain points and enhances their workflows.
      </p>
      <p>
        Identify key individuals who can contribute significantly to your design system's development &mdash; potential adopters and advocates. These unsung heroes will help champion the cause internally, ensuring buy-in from various teams and driving widespread adoption. Provide them with resources, support, and opportunities for collaboration to foster their growth as design system champions.
      </p>
      <h3>Step 3: Evolve &mdash; iterating for continuous improvement</h3>
      <p>
        Like a mad scientist perfecting their creation, your design system requires continuous improvement to stay relevant and effective. Embrace an iterative approach that encompasses testing, refining assets, enhancing documentation, and optimizing processes. Regularly evaluate the performance of your design system against evolving business needs and user feedback.
      </p>
      <p>
        Stay on the cutting edge of design by keeping up with industry trends and advancements in technology. Integrate new methodologies as they emerge, ensuring your design system remains a valuable asset for creative endeavors. By embracing change and adaptability, you foster a culture of continuous improvement that supports long-term growth and success.
      </p>
      <h3>What are the most mature design systems?</h3>
      <ul>
        <li><ExternalLink href="https://material.io/">Material Design by Google</ExternalLink></li>
        <li><ExternalLink href="https://www.bootstrapstudios.co/bootstrap/">Bootstrap by X</ExternalLink></li>
        <li><ExternalLink href="https://cloudscape.design">Cloudscape by Amazon</ExternalLink></li>
        <li><ExternalLink href="https://ant.design/">Ant Design, open source</ExternalLink></li>
      </ul>
      <p>
        Photo by Charles J. Sharp, CC BY-SA 4.0
      </p>
    </SpaceBetween>
  </Container>;
};
