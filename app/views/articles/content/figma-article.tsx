import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

/* eslint-disable max-len */
export const FigmaArticle = () => {
  return <Container
    media={{
      content:
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png"
          alt="placeholder"
        />,
      height: 200,
      position: 'top'
    }}
    header={<Header variant="h2">Embrace collaborative design tools</Header>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        The adoption of collaborative design tools can greatly enhance the collaboration between designers and developers. By leveraging shared platforms that allow real-time editing, commenting, and version control, both parties can actively participate in the design process. This promotes a seamless exchange of ideas, enables developers to understand the designer's vision more accurately, and facilitates the identification of potential implementation challenges early on.
      </Box>
      <Box variant="p">
        Figma is widely regarded as a robust and effective collaborative design tool by offering these features.
      </Box>
      <Box variant="h4">Real-time collaboration</Box>
      <Box variant="p">
        Figma excels in enabling real-time collaboration among designers and developers. Multiple team members can work simultaneously on a project, making instant changes that are instantly visible to others. This promotes seamless collaboration, eliminates version control issues, and allows for quick feedback and iteration.
      </Box>
      <Box variant="h4">Shared design components and libraries</Box>
      <Box variant="p">
        Figma allows the creation of design components and libraries that can be shared across projects and team members. This promotes consistency, efficiency, and scalability, as updates to shared components automatically propagate throughout the project. Designers and developers can collaborate on building and refining these components, ensuring a unified and coherent design system.
      </Box>
      <Box variant="h4">Commenting and feedback</Box>
      <Box variant="p">
        Figma offers robust commenting and feedback features, enabling designers and developers to provide contextual feedback directly on specific design elements. This streamlines communication, reduces the need for separate communication channels, and ensures that feedback is captured within the design itself, fostering a more iterative and collaborative design process.
      </Box>
    </SpaceBetween>
  </Container>;
};
