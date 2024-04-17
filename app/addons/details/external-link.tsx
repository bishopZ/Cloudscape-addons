import { Link } from '@cloudscape-design/components';
import React from 'react';

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
    <Link
      href={href}
      external
      externalIconAriaLabel={externalIconAriaLabel}>
      {children}
    </Link>
  </>;
};
