import { Box, Grid, Header } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

type Props = {
  title: string
  company: string
  duration: string
  logo: string
  description: React.ReactNode
}

const gridDefinition = [
  { colspan: { default: 12, xxs: 2 } },
  { colspan: { default: 12, xxs: 10 } }
];

export const JobCard = (props: Props) => {
  const { title, logo, company, duration, description } = props;

  return <Box>
    <Grid gridDefinition={gridDefinition}>
      <Box padding={Spacing.TopS}>
        <img
          alt={`${company} logo`}
          src={logo}
        />
      </Box>
      <Box>
        <Header variant="h3">
          {title}
        </Header>
        <Box variant="p">
          {company}
        </Box>
        <Box
          fontSize="body-s"
          color="text-status-inactive">
          {duration}
        </Box>
        <Box variant="p">
          {description}
        </Box>
      </Box>
    </Grid>

  </Box>;
};
