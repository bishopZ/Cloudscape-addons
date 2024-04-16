import { Link as CSLink } from '@cloudscape-design/components';
import React from 'react';
import { Link } from 'react-router-dom';

import { externalIconAriaLabel } from '/addons/helpers/a11y-helpers';

type Props = {
  href: string
  children: React.ReactNode | React.ReactNode[]
}

export const ExternalLink = (props: Props) => {
  const {
    href,
    children
  } = props;
  return <>
    <CSLink
      external
      externalIconAriaLabel={externalIconAriaLabel}>
      <Link to={href}>
        {children}
      </Link>
    </CSLink>
  </>;
};
