import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';

import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

/* eslint-disable max-lines-per-function */
export const TypeArticle = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Prism) window.Prism.highlightAll();
    }, 0);
  }, []);

  return <SpaceBetween size="m">
    <SourceCodeSection source={`import type {
  BreadcrumbGroupProps, ButtonDropdownProps, ButtonProps, CalendarProps, CardsProps, CheckboxProps,
  CollectionPreferencesProps, DateRangePickerProps, ExpandableSectionProps, FlashbarProps, GridProps,
  InputProps, LinkProps, ModalProps, MultiselectProps, NonCancelableCustomEvent, RadioGroupProps,
  SegmentedControlProps, SelectProps, SideNavigationProps, TableProps, TabsProps, TagEditorProps,
  TextFilterProps, TilesProps, ToggleProps, TokenGroupProps, WizardProps,
} from '@cloudscape-design/components';
import type { NonCancelableEventHandler } from '@cloudscape-design/components/internal/events';

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
`} />
    <Container
      media={makeHeaderImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png')}
      header={<Header variant="h2">
        Introducing TypeHelpers
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          Cloudscape has very throrough Typescript definitions. They are well-named
          and easy to navigate. However, some of them get to be very long.
          TypeHelpers creates internal definitions for many of Cloudscape's components.
        </Box>
        <pre><code className="language-javascript">{`
export type InputChange = NonCancelableCustomEvent<InputProps.ChangeDetail>
`}</code></pre>
        <Box variant="p">
          We could use the Type provided by Cloudscape, but then, we would need to type
          &nbsp;{'NonCancelableCustomEvent<InputProps.ChangeDetail>'} in our code, every time
          we create an input event handler. Doing so makes our code much more difficult
          to read. If we use the Addon names instead, it uses the same definition
          provided by Cloudscape, but has a shorter and more intuitive name.
        </Box>
        <pre><code className="language-javascript">{`
export type RowClick<T> = NonCancelableCustomEvent<TableProps.OnRowClickDetail<T>>
`}</code></pre>
        <Box variant="p">
          Some component event handlers, such as RowClick in the Table component
          use a Generic type in typescript. In the case of RowClick, the Generic
          type T represents the shape of the object that the row represents.
          The TypeHelpers simply pass along the Generic type for the types that
          use them.
        </Box>
        <pre><code className="language-javascript">{`
export type ButtonClick = CustomEvent<ButtonProps.ClickDetail>
export type TabChange = NonCancelableCustomEvent<TabsProps.ChangeDetail>
`}</code></pre>
        <Box variant="p">
          Many of the Cloudscape event handler types are Non-cancelable.
          This means that you can not call preventDefault on these events.
          Addons differentiates these types by using the CustomEvent
          and NonCancelableCustomEvent type wrappers.
        </Box>
        <pre><code className="language-javascript">{`
export type GridDefinition = ReadonlyArray<GridProps.ElementDefinition>
`}</code></pre>
        <Box variant="p">
          In addition to event handler, TypeHelpers also provides definitions
          for the components which have definitions, such as Table, Tabs,
          Grid, and more.
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing GenericObject
      </Header>}>
      <SpaceBetween size="m">
        <pre><code className="language-javascript">{`
export type GenericObject = Record<string, unknown>
`}</code></pre>
        <Box variant="p">
          Typescript has an impressive inference engine to help determine the
          type of javascript variables as they are modified by other code.
          The inference engine sometimes fails to infer the correct type,
          and many of these failures are because Typescript doesn't have a very
          good definition for a Generic object. When you know that you have an
          object, but you don't know the shape of that object, GenericObject
          is for you!
        </Box>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing ValueOf
      </Header>}>
      <SpaceBetween size="m">
        <pre><code className="language-javascript">{`
export type ValueOf<T> = T[keyof T]
`}</code></pre>
        <Box variant="p">
          ValueOf builds on Typescript's keyof operator and provides an easy way
          to get a list of string constants instead of using the more bland
          string type.
        </Box>
        <pre><code className="language-javascript">{`
const FRUITS = {
  APPLE: 'apple',
  GRAPE: 'grape'
} as const

type fruitKeys = keyof typeof FRUITS // "APPLE" and "GRAPE"
type fruitValues = ValueOf<typeof FRUITS> // "apple" and "grape"
`}</code></pre>
      </SpaceBetween>
    </Container>
  </SpaceBetween>;
};
