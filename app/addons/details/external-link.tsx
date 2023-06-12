import { Link } from '@cloudscape-design/components';
import React from 'react';

import { externalIconAriaLabel } from '../helpers/a11y-helpers';

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
    <>&nbsp;</>
    <Link
      href={href}
      external
      externalIconAriaLabel={externalIconAriaLabel}>
      {children}
    </Link>
    <>&nbsp;</>
  </>;
};
