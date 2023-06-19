import { Box, Button, SpaceBetween } from '@cloudscape-design/components';
import React from 'react';

import { Spacing } from '/addons/helpers/spacing-constants';

type Props = {
  title?: string
  description?: string
  buttonName?: string
  onClick?: () => void
}

export const GenericEmpty = (props: Props) => {
  const {
    title = 'No items',
    description = 'No items to show.',
    buttonName = 'Refresh',
    onClick = () => { window.location.reload() }
  } = props;

  return <SpaceBetween size="s">
    <Box
      variant="div"
      margin={Spacing.TopM}
      fontWeight="bold">
      {title}
    </Box>
    <Box variant="div">
      {description}
    </Box>
    <Box
      variant="div"
      margin={Spacing.TopS}>
      <Button onClick={onClick}>
        {buttonName}
      </Button>
    </Box>
  </SpaceBetween>;
};

type NoMatchProps = {
  clear: () => void
}

export const NoMatch = ({ clear }: NoMatchProps) => <GenericEmpty
  title="No matches"
  description="We couldn't find a match."
  buttonName="Clear filter"
  onClick={() => { clear() }}
/>;
