import { A11yHelpers } from "../views/articles/a11y-helpers";

export const CONTENT_MAP = {
  'a11y-helpers': A11yHelpers
} as const;

export type CONTENT_KEYS = keyof typeof CONTENT_MAP