import type { ButtonProps, IconProps } from '@cloudscape-design/components';
import { Button, FormField } from '@cloudscape-design/components';
import React from 'react';

import { loadingText } from '../helpers/a11y-helpers';
import { formfieldStrings } from '../helpers/i18n-helpers';
import { addOptional } from '../helpers/string-utils';
import type { ButtonClick, ButtonFollow } from '../helpers/type-helpers';

type Props = {
  text: React.ReactNode
  href: string
  label?: string
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
    text = <>&nbsp;</>,
    label = <>&nbsp;</>,
    iconAlt = props.iconName,
    iconAlign,
    iconName,
    iconUrl,
    href,
    constraint,
    description,
    info,
    error,
    secondaryControl,
    variant,
    download,
    formAction,
    optional = false,
    external,
    stretch,
    disabled,
    fullWidth,
    loading,
    wrapText,
    onClick,
    onFollow,
  } = props;

  const displayLabel = optional
    ? addOptional(label)
    : label;

  return <FormField
    label={displayLabel}
    constraintText={constraint}
    description={description}
    errorText={error}
    info={info}
    secondaryControl={secondaryControl}
    stretch={stretch}
    i18nStrings={formfieldStrings}>
    <Button
      href={href}
      target={external ? '_blank' : ''} // also sets the rel property
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
    </Button>
  </FormField>;
};
