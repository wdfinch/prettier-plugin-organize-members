import {
  ChoiceSupportOption,
  ParserOptions,
  PathArraySupportOption,
} from 'prettier'

export type Section =
  | 'staticProperties'
  | 'staticMethods'
  | 'properties'
  | 'constructor'
  | 'methods'

export type SectionOrder = Section[]

export type Accessibility = 'public' | 'private' | 'protected'
export type AccessibilityOrder = Accessibility[]

export type Groups = 'getterThenSetter' | 'everythingElse'
export type GroupOrder = Groups[]
export type GroupSortOrder = 'alphabetical' | 'none'

export interface PluginOptions {
  sectionOrder: SectionOrder
  accessibilityOrder: AccessibilityOrder
  groupOrder: GroupOrder
  groupSortOrder: GroupSortOrder
}

export interface PluginOptionsConfig {
  sectionOrder: PathArraySupportOption
  accessibilityOrder: PathArraySupportOption
  groupOrder: PathArraySupportOption
  groupSortOrder: ChoiceSupportOption<GroupSortOrder>
}

export type ParserOptionsWithCustomOptions = ParserOptions & PluginOptions
