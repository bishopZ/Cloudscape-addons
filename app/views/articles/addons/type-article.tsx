import { Box, Container, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectArticle } from '/data/articles';
import { useAppSelector } from '/data/data-store';
import { makeHeaderImage } from '/utils/content-map';
import { SourceCodeSection } from '/views/common/source-code-section';

/* eslint-disable max-lines-per-function */
export const TypeArticle = () => {
  const params = useParams();
  const article = useAppSelector(selectArticle(params.slug!));

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
      media={makeHeaderImage(article?.image ?? '')}
      header={<Header variant="h2">
        Introducing TypeHelpers
      </Header>}>
      <SpaceBetween size="s">
        <Box variant="p">
          Cloudscape's Typescript definitions for their design system are extensive, well-organized, and easy to navigate. The naming conventions make it simple to identify and use the various components. However, I've noticed that some of the type names can be quite lengthy. With that in mind, I created TypeHelpers as a complementary tool for Cloudscape users.
        </Box>
        <Box variant="p">
          TypeHelpers provides internal definitions for many Cloudscape components, acting as an interface to the original types. These shortened names make the code more readable and easier to understand, especially when working with complex component structures or large projects. By maintaining these helpers within your application, you can ensure that they remain up-to-date with any changes to Cloudscape's definitions.
        </Box>
        <pre><code className="language-javascript">{`
export type InputChange = NonCancelableCustomEvent<InputProps.ChangeDetail>
`}</code></pre>
        <Box variant="p">
          Consider these two examples. Which is easier to read? Which would you rather have in your code?
        </Box>
        <pre><code className="language-javascript">{`
type Props = {
  onChange: (event: NonCancelableCustomEvent<InputProps.ChangeDetail>) => void
}

type Props = {
  onChange: (event: InputChange) => void
}
`}</code></pre>
        <Box variant="p">
          It is essential to clarify that TypeHelpers are not intended to be added to the official Cloudscape library. Instead, they serve as a valuable resource for developers using Cloudscape in their projects. You can choose to subset the provided helpers to only include the components that are actually being used in your application.
        </Box>
        <Box variant="p">
          Some component event handlers, such as RowClick in the Table component
          use a Generic type. In the case of RowClick, the Generic
          type &lt;T&gt; represents the shape of the object that the row represents.
          TypeHelpers simply pass along the Generic type for the types that
          use them.
        </Box>
        <pre><code className="language-javascript">{`
export type RowClick<T> = NonCancelableCustomEvent<TableProps.OnRowClickDetail<T>>
`}</code></pre>
        <Box variant="p">
          Many of the Cloudscape event handler types are Non-cancelable.
          This means that you can not call preventDefault on these events.
          Addons differentiates which components provide which type of event handler.
        </Box>
        <pre><code className="language-javascript">{`
export type ButtonClick = CustomEvent<ButtonProps.ClickDetail>
export type TabChange = NonCancelableCustomEvent<TabsProps.ChangeDetail>
`}</code></pre>
        <Box variant="p">
          In addition to event handlers, TypeHelpers also provides definitions
          for the components which have definition objects, such as Table, Tabs,
          Grid, and more.
        </Box>
        <pre><code className="language-javascript">{`
export type GridDefinition = ReadonlyArray<GridProps.ElementDefinition>
`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing GenericObject
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          In Typescript, the inference engine is a powerful feature that helps determine the data type of JavaScript variables based on how they are used within your code. However, there are situations where the inference engine may not be able to accurately infer the correct type, particularly when dealing with generic objects.
        </Box>
        <Box variant="p">
          A generic object is an unstructured collection of key-value pairs, where you know that you have an object but don't know its specific shape or keys in advance. To address this common scenario, I created a type definition called GenericObject.
        </Box>
        <pre><code className="language-javascript">{`
export type GenericObject = Record<string, unknown>
`}</code></pre>
        <Box variant="p">
          This definition ensures that Typescript recognizes the variable as an object with unknown keys, enabling better type checking and error reporting in your code. By using `GenericObject`, you can more accurately represent real-world data structures where the exact shape is not known at compile time, such as a JSON object received from an API.
        </Box>
        <Box variant="p">
          If you want the GenericObject definition to more accurately match the Javascript specification,
          you can change it to include numbers and symbols as potential key types.
        </Box>
        <pre><code className="language-javascript">{`
export type GenericObject = Record<string | number | symbol, unknown>
`}</code></pre>
      </SpaceBetween>
    </Container>
    <Container
      header={<Header variant="h2">
        Introducing ValueOf
      </Header>}>
      <SpaceBetween size="m">
        <Box variant="p">
          In Typescript, you can use the typeof keyword to get the type of an object or value. However, there isn't a built-in way to extract the actual values from an object. To make this process easier, I created a type definition called ValueOf.
        </Box>
        <pre><code className="language-javascript">{`
export type ValueOf<T> = T[keyof T]
`}</code></pre>
        <Box variant="p">
          The ValueOf&lt;T&gt; type accepts a generic type T. By using the typeof operator in combination with ValueOf, you can extract the values from an object. This is particularly useful when creating a concise type definition for a string that can only have certain values.
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
