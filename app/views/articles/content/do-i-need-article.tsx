import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';
import { useParams } from 'react-router-dom';

import { selectArticles } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';

/* eslint-disable max-len */
export const DoINeedArticle = () => {
  const params = useParams();
  const { items } = useAppSelector(selectArticles);
  const article = items.find(item => item.slug === params.slug);

  return <SpaceBetween size="m">
    <Container media={article && makeHeaderImage(article.image)}>
      <SpaceBetween size="xs">
        <Header variant="h2">Scale</Header>
        <p>
          A design system helps ensure consistency across different channels and products, which is particularly important for organizations with multiple teams working on various platforms. When there are many teams involved in the design process, a centralized system helps maintain a unified visual identity, preventing confusion among customers and ensuring a cohesive brand image. This consistency is vital for building trust and recognition in your brand, especially if you're operating in a crowded market with numerous competitors.
        </p>
        <p>
          Complexity in organizational structure can also contribute to the need for a design system. When there are various skill levels within different teams, a centralized system helps establish clear guidelines and standards that everyone can follow. This consistency across different skill levels ensures that your brand's visual identity is maintained, even when different teams are working on different projects. A well-defined design system also streamlines the design process by providing a single source of truth for all design elements, making it easier to collaborate and reduce errors.
        </p>
        <p>
          If your organization operates in a stable market with long-lived products, investing in a design system can help minimize risks associated with inconsistency. A well-defined system ensures that design decisions align with your brand's overall strategy and vision, which is particularly important when your product or service has a lengthy lifespan. By establishing clear guidelines early on, you can avoid costly rebranding efforts in the future if market conditions change or customer preferences shift.
        </p>
        <p>
          On the other hand, if your organization operates in a rapidly changing market with frequent product launches, the benefits of a design system may be outweighed by the need for flexibility and adaptability. In these situations, a more flexible approach to design may be necessary, allowing for quicker iteration and experimentation to keep up with changing customer preferences and market trends.
        </p>
      </SpaceBetween>
    </Container>
    <Container>
      <SpaceBetween size="xs">
        <Header variant="h2">Longevity</Header>
        <Header variant='h3'>Design system maturity</Header>
        <p>
          The maturity of your design system can also impact its benefits. A well-established design system with clear guidelines, standards, and governance can provide more stability and consistency than an immature system. However, if your design system is still in the early stages of development, it may be more difficult to achieve the benefits.
        </p>
        <Header variant='h3'>Cultural considerations</Header>
        <p>
          The culture of your organization can also play a role in determining the benefits of a design system. If your organization values consistency and stability, investing in a design system may make sense. However, if your organization values flexibility and adaptability more, a more agile and flexible approach to design may be necessary.
        </p>
        <p>
          In summary, longevity is an important consideration when designing a distributed system, and it can impact the long-term stability and consistency of the system. By considering factors such as market stability, product lifespan, inconsistency vs flexibility, design system maturity, cultural considerations, and cost-benefit analysis, you can make an informed decision about whether or not to invest in a design system based on your specific use case and organization.
        </p>
        <Box variant="p" fontSize="body-s" color="text-body-secondary">
          Photo by John Fowler from Placitas, NM, USA, CC BY 2.0, Wikimedia Commons
        </Box>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
