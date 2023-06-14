import { IconMapArticle } from '/views/articles/icon-map-article';
import { InputArticle } from '/views/articles/input-article';
import { LoadingArticle } from '/views/articles/loading-article';
import { NumberArticle } from '/views/articles/number-article';

export const CONTENT_MAP = {
  'icon-map': IconMapArticle,
  'loading-states': LoadingArticle,
  'labeled-input': InputArticle,
  'labeled-number': NumberArticle,
} as const;

export type CONTENT_KEYS = keyof typeof CONTENT_MAP
