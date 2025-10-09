import { Box, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React, { memo } from 'react';

export const HelpPanelContent = () => {
  return <HelpPanel
    header={<Header variant="h2">Bishop Zareh</Header>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        Bishop Zareh is an exceptional software engineer with over 20 years of crafting novel web, mobile, and immersive experiences.
      </Box>
      <Header variant='h3'>Award-winning experience</Header>
      <ul>
        <li>Received awards from SIGGRAPH, SXSW, AIGA, Awwwards</li>
        <li>Received industry certifications from Apple, Google, Adobe, Autodesk, and more</li>
      </ul>
      <Header variant='h3'>Teaching and speaking</Header>
      <ul>
        <li>Taught motion design at the School of the Art Institute of Chicago (2005-2011)</li>
        <li>Spoke about the future of user interface design at technical conferences across the country (2010)</li>
        <li>Organized a panel at South by Southwest on glitch art (2013)</li>
      </ul>
      <Header variant='h3'>Achievements</Header>
      <ul>
        <li>Won an Audience Choice award at the San Antonio Film Festival for color grading and title design work on Wallace Witherspoon's "Second Impression" (2016)</li>
        <li>Featured in the Colorado AdClub's "The 50" for work on Aspen's "Give a Fl*ke" campaign (2018)</li>
      </ul>
      <Header variant='h3'>Embedded expert at Amazon</Header>
      <p>
        Since 2021, Bishop has worked as an embedded expert at Amazon, bringing his unique blend of design skills and agile methodologies to the company. With a passion for delivering high-quality code and a commitment to excellence, Bishop is ready to take on new challenges and drive success for your team.
      </p>
      <p>&nbsp;</p>
    </SpaceBetween>
  </HelpPanel>;
};

export default memo(HelpPanelContent);
