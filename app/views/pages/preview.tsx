import '@cloudscape-design/global-styles/index.css';

import React from 'react';

import { CodeDisplay } from '../../addons/details/code-display';
import { ExternalLink } from '../../addons/details/external-link';
import { GenericError } from '../../addons/details/generic-error';
import { LabeledNumber } from '../../addons/details/labeled-number';
import { Dash, LoadingSpinner } from '../../addons/details/loading';
import { LabeledButton } from '../../addons/forms/labeled-button';
import { LabeledCheckbox } from '../../addons/forms/labeled-checkbox';
import { LabeledInput } from '../../addons/forms/labeled-input';
import { LabeledMultiselect } from '../../addons/forms/labeled-multiselect';
import { LabeledRadioGroup } from '../../addons/forms/labeled-radio-group';
import { LabeledSelect } from '../../addons/forms/labeled-select';
import { LabeledTextarea } from '../../addons/forms/labeled-textarea';
import { LabeledTiles } from '../../addons/forms/labeled-tiles';
import { LabeledToggle } from '../../addons/forms/labeled-toggle';
import { UnsavedChanges } from '../../addons/forms/unsaved-changes';
import * as Labels from '../../addons/helpers/a11y-helpers';
import * as Strings from '../../addons/helpers/i18n-helpers';
import { IconMap } from '../../addons/helpers/icon-map';
import { Spacing } from '../../addons/helpers/spacing-constants';
import * as Utils from '../../addons/helpers/string-utils';
import { GenericEmpty } from '../../addons/tables/generic-empty';
import { useAppDispatch, useAppSelector } from '../../data/data-store';
import { selectNotifications } from '../../data/notifications';

export const Preview = () => {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();

  return <>
    {notifications.length}
    <br />
    <Dash />
    <br />
    <LoadingSpinner />
    <br />
    <IconMap />
    <br />
    <LabeledInput value={''} onChange={() => {}} />
    <br />
    <LabeledSelect onChange={() => {}} empty={''} />
    <br />
    <ExternalLink href={''}>Link</ExternalLink>
    <br />
    <LabeledNumber label={''} />
    <br />
    <LabeledButton text={'button'} href={'#'} />
    <br />
    <LabeledTextarea value={''} onChange={() => {}} />
    <br />
    <CodeDisplay value={''} />
    <br />
    <LabeledMultiselect selectedOptions={[]} onChange={() => {}} empty={''} />
    <br />
    <LabeledCheckbox checked={false} onChange={() => {}}>Click me</LabeledCheckbox>
    <br />
    <LabeledToggle checked={false} onChange={() => {}}>On</LabeledToggle>
    <br />
    <LabeledRadioGroup value={''} items={[]} onChange={() => {}} />
    <br />
    <LabeledTiles value={null} items={[]} onChange={() => {}} />
    <br />
    <UnsavedChanges visible={false} onDismiss={() => {}} onLeave={() => {}} />
    <br />
    <GenericEmpty
      title={''}
      description={''}
      buttonName={''}
      onClick={() => {}}
    />
    <br />
    <GenericError />
  </>;
};
