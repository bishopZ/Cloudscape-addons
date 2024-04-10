import { Box, Header, HelpPanel, SpaceBetween } from '@cloudscape-design/components';
import React, { memo } from 'react';

export const HelpPanelContent = () => {
  return <HelpPanel
    header={<Header variant="h2">Summary</Header>}>
    <SpaceBetween size="xs">
      <Box variant="p">
          With more than two decades of experience crafting
          novel experiences for the web, mobile, and immersive environments,
          Bishop brings a wealth of knowledge and expertise
          to lead your team to success.
      </Box>
      <Box variant="p">
          He's received awards from
          SIGGRAPH, SXSW, AIGA, Awwwards
          and industry certifications from
          Apple, Google, Adobe, Autodesk and more.
      </Box>
      <Box variant="p">
          From 2005 to 2011, he taught motion design at
          School of the Art Institute of Chicago.
          In 2010, Bishop spoke about the future of user interface design
          at technical conferences across the country.
          In 2013, he organized a panel at South by Southwest on glitch art.
          In 2016, he won an Audience Choice award at the San Antonio Film
          Festival for his color grading and title design work on
          Wallace Witherspoon's "Second Impression."
          In 2018, he was featured in the Colorado AdClub's "The 50"
          for his work on Aspen's "Give a Fl*ke" campaign.
      </Box>
      <Box variant="p">
          Since 2021, he's worked as an embedded expert at Amazon.
      </Box>
    </SpaceBetween>
  </HelpPanel>;
};

export default memo(HelpPanelContent);
