import { Alert, Button } from '@cloudscape-design/components';
import React from 'react';

import { errorIconAriaLabel } from '../helpers/a11y-helpers';

type Props = {
  header?: string
  message?: string
  buttonName?: string
  onClick?: () => void
}

export const GenericError = (props: Props) => {
  const {
    header = 'Network error',
    message = 'An unknown error occurred. Please try again. If the problem persists, contact technical support.',
    buttonName = 'Refresh',
    onClick = () => { window.location.reload() }
  } = props;
  return <Alert
    type="error"
    header={header}
    action={
      <Button onClick={onClick}>
        {buttonName}
      </Button>
    }
    statusIconAriaLabel={errorIconAriaLabel}>
    {message}
  </Alert>;
};
