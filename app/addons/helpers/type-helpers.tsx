import type {
  BreadcrumbGroupProps,
  ButtonProps, CheckboxProps, FlashbarProps, InputProps, MultiselectProps, NonCancelableCustomEvent, RadioGroupProps,
  SelectProps, TilesProps, ToggleProps
} from '@cloudscape-design/components';
import type { Params } from 'react-router-dom';

export type ValueOf<T> = T[keyof T]
export type GenericObject = Record<string, string>;

export type InputChange = NonCancelableCustomEvent<InputProps.ChangeDetail>
export type SelectChange = NonCancelableCustomEvent<SelectProps.ChangeDetail>
export type MultiselectChange = NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>
export type CheckboxChange = NonCancelableCustomEvent<CheckboxProps.ChangeDetail>
export type SelectLoad = NonCancelableCustomEvent<SelectProps.LoadItemsDetail>
export type ToogleChange = NonCancelableCustomEvent<ToggleProps.ChangeDetail>
export type RadioChange = NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>
export type TileChange = NonCancelableCustomEvent<TilesProps.ChangeDetail>

export type ButtonClick = CustomEvent<ButtonProps.ClickDetail>
export type ButtonFollow = CustomEvent<ButtonProps.FollowDetail>
export type KeyDetail = CustomEvent<InputProps.KeyDetail>

export type RadioItems = ReadonlyArray<RadioGroupProps.RadioButtonDefinition>
export type TileItems = ReadonlyArray<TilesProps.TilesDefinition>

export type FlashbarMessage = FlashbarProps.MessageDefinition;

export type ParamBreadcrumb = (params: Readonly<Params<string>>) => BreadcrumbGroupProps.Item;
export type ParamString = (params: Readonly<Params<string>>) => string;
export type Breadcrumb = BreadcrumbGroupProps.Item
