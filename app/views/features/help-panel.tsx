import { Box, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React, { memo } from 'react';

export const HelpPanelContent = () => {
  return <HelpPanel
    header={<Header variant="h2">Bishop Zareh: software engineering expert with a twist</Header>}>
    <SpaceBetween size="xs">
      <Box variant="p">
        Are you looking for an exceptional software engineer who can bring innovation and creativity to your team? Look no further than Bishop Zareh, with over 20 years of experience crafting novel experiences for the web, mobile, and immersive environments. Bishop is ready to lead your team to success with a wealth of knowledge and expertise.
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
      <Header variant='h3'>Fun facts</Header>
      <ul>
        <li>Bishop is a bit of a quirky character with a great sense of humor (just don't ask him about his secret stash of puns).</li>
        <li>When he's not coding, Bishop can be found exploring the outdoors or experimenting with new recipes in the kitchen.</li>
        <li>Despite being 49 years young, Bishop is still trying to figure out how to use TikTok (hey, it's all about learning and growth, right?).</li>
      </ul>
      <p>&nbsp;</p>
    </SpaceBetween>
  </HelpPanel>;
};

export default memo(HelpPanelContent);
