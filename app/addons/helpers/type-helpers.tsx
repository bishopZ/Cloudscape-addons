import type {
  BreadcrumbGroupProps, ButtonDropdownProps, ButtonProps, CalendarProps, CardsProps, CheckboxProps,
  CollectionPreferencesProps, DateRangePickerProps, ExpandableSectionProps, FlashbarProps, GridProps,
  InputProps, LinkProps, ModalProps, MultiselectProps, NonCancelableCustomEvent, RadioGroupProps,
  SegmentedControlProps, SelectProps, SideNavigationProps, TableProps, TabsProps, TagEditorProps,
  TextFilterProps, TilesProps, ToggleProps, TokenGroupProps, WizardProps,
} from '@cloudscape-design/components';
import type { NonCancelableEventHandler } from '@cloudscape-design/components/internal/events';
import type { Params } from 'react-router-dom';
import { Article } from '/data/articles';

export type GenericObject = Record<string, unknown>
export type ValueOf<T> = T[keyof T]

export type ButtonClick = CustomEvent<ButtonProps.ClickDetail>
export type ButtonFollow = CustomEvent<ButtonProps.FollowDetail>
export type ButtonDropClick = CustomEvent<ButtonDropdownProps.ItemClickDetails>
export type CardsChange<T> = NonCancelableCustomEvent<CardsProps.SelectionChangeDetail<T>>
export type CalendarChange = NonCancelableCustomEvent<CalendarProps.ChangeDetail>
export type CheckboxChange = NonCancelableCustomEvent<CheckboxProps.ChangeDetail>
export type ColumnWidthsChange = NonCancelableCustomEvent<TableProps.ColumnWidthsChangeDetail>
export type DateRangeChange = NonCancelableCustomEvent<DateRangePickerProps.ChangeDetail>
export type ExpandableChange = NonCancelableCustomEvent<ExpandableSectionProps.ChangeDetail>
export type InputChange = NonCancelableCustomEvent<InputProps.ChangeDetail>
export type InputKeyDetail = CustomEvent<InputProps.KeyDetail>
export type LinkFollow = CustomEvent<LinkProps.FollowDetail>
export type ModalDismiss = NonCancelableCustomEvent<ModalProps.DismissDetail>
export type MultiselectChange = NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>
export type PreferenceConfirm<T> = NonCancelableEventHandler<CollectionPreferencesProps.Preferences<T>>
export type RadioChange = NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>
export type RowClick<T> = NonCancelableCustomEvent<TableProps.OnRowClickDetail<T>>
export type SegmentedChange = NonCancelableCustomEvent<SegmentedControlProps.ChangeDetail>
export type SelectChange = NonCancelableCustomEvent<SelectProps.ChangeDetail>
export type SelectLoad = NonCancelableCustomEvent<SelectProps.LoadItemsDetail>
export type SideNavChange = NonCancelableCustomEvent<SideNavigationProps.ChangeDetail>
export type SideNavFollow = CustomEvent<SideNavigationProps.FollowDetail>
export type TabChange = NonCancelableCustomEvent<TabsProps.ChangeDetail>
export type TableSelectionChange<T> = NonCancelableCustomEvent<TableProps.SelectionChangeDetail<T>>
export type TableSortChange<T> = NonCancelableCustomEvent<TableProps.SortingState<T>>
export type TagEditorChange = NonCancelableCustomEvent<TagEditorProps.ChangeDetail>
export type TextFilterChange = NonCancelableCustomEvent<TextFilterProps.ChangeDetail>
export type TileChange = NonCancelableCustomEvent<TilesProps.ChangeDetail>
export type TokenDismiss = NonCancelableCustomEvent<TokenGroupProps.DismissDetail>
export type ToogleChange = NonCancelableCustomEvent<ToggleProps.ChangeDetail>
export type WizardNavigate = NonCancelableCustomEvent<WizardProps.NavigateDetail>

export type Breadcrumb = BreadcrumbGroupProps.Item
export type ButtonDropItems = ReadonlyArray<ButtonDropdownProps.ItemOrGroup>
export type CardsDefinition<T> = CardsProps.CardDefinition<T>
export type CardSection<T> = ReadonlyArray<CardsProps.SectionDefinition<T>>
export type CardsLayout = ReadonlyArray<CardsProps.CardsLayout>
export type FlashbarMessage = FlashbarProps.MessageDefinition;
export type FlashbarMessages = ReadonlyArray<FlashbarProps.MessageDefinition>
export type GridDefinition = ReadonlyArray<GridProps.ElementDefinition>
export type MultiSelectedOptions = ReadonlyArray<MultiselectProps.Option>
export type RadioItems = ReadonlyArray<RadioGroupProps.RadioButtonDefinition>
export type SideNavHeader = SideNavigationProps.Header
export type SideNavItems = ReadonlyArray<SideNavigationProps.Item>
export type SegmentedOptions = ReadonlyArray<SegmentedControlProps.Option>
export type SelectOptions = Array<SelectProps.Option>
export type Tabs = ReadonlyArray<TabsProps.Tab>
export type Tag = TagEditorProps.Tag
export type Tags = ReadonlyArray<TagEditorProps.Tag>
export type TableColumn<T> = TableProps.ColumnDefinition<T> & { editable?: boolean }
export type TileItems = ReadonlyArray<TilesProps.TilesDefinition>
export type TimeRangeOptions = ReadonlyArray<DateRangePickerProps.RelativeOption>
export type TokenItems = ReadonlyArray<TokenGroupProps.Item>
export type WizardSteps = ReadonlyArray<WizardProps.Step>

export type ParamBreadcrumb = (params: Readonly<Params<string>>) => BreadcrumbGroupProps.Item;
export type ParamString = (params: Readonly<Params<string>>) => string;
export type ParamArticle = (params: Readonly<Article>) => string;
