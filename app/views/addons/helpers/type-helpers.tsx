import type {
  ButtonProps, CheckboxProps, InputProps, MultiselectProps, NonCancelableCustomEvent, SelectProps, ToggleProps
} from '@cloudscape-design/components';

export type ValueOf<T> = T[keyof T]
export type GenericObject = Record<string, string>;

export type InputChange = NonCancelableCustomEvent<InputProps.ChangeDetail>
export type SelectChange = NonCancelableCustomEvent<SelectProps.ChangeDetail>
export type MultiselectChange = NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>
export type CheckboxChange = NonCancelableCustomEvent<CheckboxProps.ChangeDetail>
export type SelectLoad = NonCancelableCustomEvent<SelectProps.LoadItemsDetail>
export type ToogleChange = NonCancelableCustomEvent<ToggleProps.ChangeDetail>

export type ButtonClick = CustomEvent<ButtonProps.ClickDetail>;
export type ButtonFollow = CustomEvent<ButtonProps.FollowDetail>;
export type KeyDetail = CustomEvent<InputProps.KeyDetail>
