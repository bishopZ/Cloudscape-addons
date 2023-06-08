import '@cloudscape-design/global-styles/index.css';

import React from 'react';

import { CodeDisplay } from './addons/code-display';
import { ExternalLink } from './addons/external-link';
import { LabeledButton } from './addons/forms/labeled-button';
import { LabeledCheckbox } from './addons/forms/labeled-checkbox';
import { LabeledInput } from './addons/forms/labeled-input';
import { LabeledMultiselect } from './addons/forms/labeled-multiselect';
import { LabeledRadioGroup } from './addons/forms/labeled-radio-group';
import { LabeledSelect } from './addons/forms/labeled-select';
import { LabeledTextarea } from './addons/forms/labeled-textarea';
import { LabeledTiles } from './addons/forms/labeled-tiles';
import { LabeledToggle } from './addons/forms/labeled-toggle';
import { GenericError } from './addons/generic-error';
import * as Labels from './addons/helpers/a11y-helpers';
import * as Strings from './addons/helpers/i18n-helpers';
import { IconMap } from './addons/helpers/icon-map';
import { Spacing } from './addons/helpers/spacing-constants';
import * as Utils from './addons/helpers/string-utils';
import { RadioChange, TileChange } from './addons/helpers/type-helpers';
import { LabeledNumber } from './addons/labeled-number';
import { Dash, LoadingSpinner } from './addons/loading';
import { GenericEmpty } from './addons/tables/generic-empty';
import { UnsavedChanges } from './addons/unsaved-changes';

export const Application = () => {
  return <>
    <Dash />
    <LoadingSpinner />
    <IconMap />
    <LabeledInput value={''} onChange={() => {}} />
    <LabeledSelect onChange={() => {}} empty={''} />
    <ExternalLink href={''}>Link</ExternalLink>
    <LabeledNumber label={''} />
    <LabeledButton text={'button'} href={'#'} />
    <LabeledTextarea value={''} onChange={() => {}} />
    <CodeDisplay value={''} />
    <LabeledMultiselect selectedOptions={[]} onChange={() => {}} empty={''} />
    <LabeledCheckbox checked={false} onChange={() => {}}>Click me</LabeledCheckbox>
    <LabeledToggle checked={false} onChange={() => {}}>On</LabeledToggle>
    <LabeledRadioGroup value={''} items={[]} onChange={() => {}} />
    <LabeledTiles value={null} items={[]} onChange={() => {}} />
    <UnsavedChanges visible={false} onDismiss={() => {}} onLeave={() => {}} />
    <GenericEmpty
      title={''}
      description={''}
      buttonName={''}
      onClick={() => {}}
    />
    <GenericError />
  </>;
};
