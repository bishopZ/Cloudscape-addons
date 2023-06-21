import { EmptyArticle } from '/views/articles/addons/empty-article';
import { IconMapArticle } from '/views/articles/addons/icon-map-article';
import { InputArticle } from '/views/articles/addons/input-article';
import { LabeledValueArticle } from '/views/articles/addons/labeled-value-article';
import { LoadingArticle } from '/views/articles/addons/loading-article';
import { NumberArticle } from '/views/articles/addons/number-article';
import { SpacingConstants } from '/views/articles/addons/spacing-article';
import { UnsavedArticle } from '/views/articles/addons/unsaved-article';
import { AnatomyArticle } from '/views/articles/content/anatomy-article';
import { BridgingTheChasmContent } from '/views/articles/content/bridging-the-chasm';
import { DocumentingArticle } from '/views/articles/content/documenting-article';
import { LifecycleArticle } from '/views/articles/content/lifecycle-article';
import { TenetsPage } from '/views/pages/tenets/tenets-page';

export const CONTENT_MAP = {
  'core-tenets': TenetsPage,

  'icon-map': IconMapArticle,
  'loading-states': LoadingArticle,
  'labeled-input': InputArticle,
  'labeled-number': NumberArticle,
  'spacing-constants': SpacingConstants,
  'labeled-value': LabeledValueArticle,
  'generic-empty': EmptyArticle,
  'unsaved-changes-modal': UnsavedArticle,

  'bridging-the-chasm': BridgingTheChasmContent,
  'anatomy-of-a-design-system': AnatomyArticle,
  'documenting-a-design-system': DocumentingArticle,
  'design-system-lifecycle': LifecycleArticle,
} as const;

export type CONTENT_KEYS = keyof typeof CONTENT_MAP
