import { Alert, Button } from '@cloudscape-design/components';
import React, { memo, useCallback } from 'react';

import { errorIconAriaLabel } from '/addons/helpers/a11y-helpers';

type Props = {
  header?: string
  message?: string
  buttonName?: string
  onClick?: () => void
}

const GenericError = (props: Props) => {
  const {
    header = 'Unknown error',
    message = 'An unknown error occurred. Please try again. If the problem persists, contact technical support.',
    buttonName = 'Refresh',
    onClick = () => { window.location.reload() }
  } = props;

  const onClickMemo = useCallback(onClick, [onClick]);

  return <Alert
    type="error"
    header={header}
    action={
      <Button onClick={onClickMemo}>
        {buttonName}
      </Button>
    }
    statusIconAriaLabel={errorIconAriaLabel}>
    {message}
  </Alert>;
};

export default memo(GenericError);
