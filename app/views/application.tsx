import React from 'react';

import { CodeDisplay } from './addons/code-display';
import { LabeledButton } from './addons/forms/labeled-button';
import { LabeledCheckbox } from './addons/forms/labeled-checkbox';
import { LabeledInput } from './addons/forms/labeled-input';
import { LabeledMultiselect } from './addons/forms/labeled-multiselect';
import { LabeledSelect } from './addons/forms/labeled-select';
import { LabeledTextarea } from './addons/forms/labeled-textarea';
import { LabeledToggle } from './addons/forms/labeled-toggle';
import * as Labels from './addons/helpers/a11y-helpers';
import * as Strings from './addons/helpers/i18n-helpers';
import { IconMap } from './addons/helpers/icon-map';
import { Spacing } from './addons/helpers/spacing-constants';
import * as Utils from './addons/helpers/string-utils';
import { LabeledNumber } from './addons/labeled-number';
import { ExternalLink } from './addons/links/external-link';
import * as Loading from './addons/loading';

export const Application = () => {
  return <>
    <IconMap />
    <LabeledInput value={''} />
    <LabeledSelect />
    <ExternalLink href={''}>Link</ExternalLink>
    <LabeledNumber label={''} />
    <LabeledButton text={'button'} href={'#'} />
    <LabeledTextarea value={''} />
    <CodeDisplay value={''} />
    <LabeledMultiselect selectedOptions={[]} />
    <LabeledCheckbox checked={false}>Click me</LabeledCheckbox>
    <LabeledToggle />
  </>;
};
