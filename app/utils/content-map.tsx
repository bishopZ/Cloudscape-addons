import { EmptyArticle } from '/views/articles/addons/empty-article';
import { IconMapArticle } from '/views/articles/addons/icon-map-article';
import { InputArticle } from '/views/articles/addons/input-article';
import { LabeledValueArticle } from '/views/articles/addons/labeled-value-article';
import { LoadingArticle } from '/views/articles/addons/loading-article';
import { NumberArticle } from '/views/articles/addons/number-article';
import { SpacingConstants } from '/views/articles/addons/spacing-article';
import { AnatomyArticle } from '/views/articles/content/anatomy-article';
import { BridgingTheChasmContent } from '/views/articles/content/bridging-the-chasm';
import { TenetsPage } from '/views/pages/tenets/tenets-page';

export const CONTENT_MAP = {
  'core-tenets': TenetsPage,
  'icon-map': IconMapArticle,
  'loading-states': LoadingArticle,
  'labeled-input': InputArticle,
  'labeled-number': NumberArticle,
  'spacing-constants': SpacingConstants,
  'generic-empty': EmptyArticle,
  'bridging-the-chasm': BridgingTheChasmContent,
  'anatomy-of-a-design-system': AnatomyArticle,
  'labeled-value': LabeledValueArticle,
} as const;

export type CONTENT_KEYS = keyof typeof CONTENT_MAP
