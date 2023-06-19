import type { ButtonProps, IconProps } from '@cloudscape-design/components';
import { Button, FormField, Popover } from '@cloudscape-design/components';
import React from 'react';

import { loadingText } from '/addons/helpers/a11y-helpers';
import { formfieldStrings } from '/addons/helpers/i18n-helpers';
import { addOptional } from '/addons/helpers/string-utils';
import type { ButtonClick, ButtonFollow } from '/addons/helpers/type-helpers';

type Props = {
  text: React.ReactNode
  href: string
  label?: string
  popover?: React.ReactNode
  constraint?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  info?: React.ReactNode
  secondaryControl?: React.ReactNode
  variant?: ButtonProps.Variant
  iconAlign?: ButtonProps.IconAlign
  iconAlt?: string
  iconName?: IconProps.Name
  iconUrl?: string
  iconSvg?: React.ReactNode
  download?: string | boolean
  formAction?: ButtonProps.FormAction
  optional?: boolean
  external?: boolean
  stretch?: boolean
  disabled?: boolean
  fullWidth?: boolean
  loading?: boolean
  wrapText?: boolean
  onClick?: (event: ButtonClick) => void
  onFollow?: (event: ButtonFollow) => void
}

export const LabeledButton = (props: Props) => {
  const {
    label = <>&nbsp;</>,
    iconAlt = props.iconName,
    optional = false,
    text, href,
    iconAlign, iconName, iconUrl,
    popover, constraint, description, info, error, secondaryControl,
    variant, download, formAction,
    external, stretch, disabled, fullWidth, loading, wrapText,
    onClick, onFollow,
  } = props;

  const displayLabel = optional
    ? addOptional(label)
    : label;

  const PlainButton = () => <Button
    target={external ? '_blank' : ''} // also sets the rel property
    href={href}
    variant={variant}
    iconName={iconName}
    iconAlign={iconAlign}
    iconAlt={iconAlt}
    iconUrl={iconUrl}
    formAction={formAction}
    download={download}
    disabled={disabled}
    fullWidth={fullWidth}
    loading={loading}
    loadingText={loadingText}
    wrapText={wrapText}
    onClick={onClick}
    onFollow={onFollow}>
    {text}
  </Button>;

  return <FormField
    label={displayLabel}
    constraintText={constraint}
    description={description}
    errorText={error}
    info={info}
    secondaryControl={secondaryControl}
    stretch={stretch}
    i18nStrings={formfieldStrings}>
    {popover
      ? <Popover
        dismissButton={false}
        position="top"
        size="small"
        triggerType="custom"
        content={popover}>
        <PlainButton />
      </Popover>
      : <PlainButton />}
  </FormField>;
};
