import React from 'react';

import { EmptyArticle } from '/views/articles/addons/empty-article';
import { IconMapArticle } from '/views/articles/addons/icon-map-article';
import { InputArticle } from '/views/articles/addons/input-article';
import { LabeledValueArticle } from '/views/articles/addons/labeled-value-article';
import { LoadingArticle } from '/views/articles/addons/loading-article';
import { NumberArticle } from '/views/articles/addons/number-article';
import { SpacingConstants } from '/views/articles/addons/spacing-article';
import { StringArticle } from '/views/articles/addons/string-article';
import { TypeArticle } from '/views/articles/addons/type-article';
import { UnsavedArticle } from '/views/articles/addons/unsaved-article';
import { AnatomyArticle } from '/views/articles/content/anatomy-article';
import { BridgingTheChasmContent } from '/views/articles/content/bridging-the-chasm';
import { DoINeedArticle } from '/views/articles/content/do-i-need-article';
import { DocumentingArticle } from '/views/articles/content/documenting-article';
import { FigmaArticle } from '/views/articles/content/figma-article';
import { LifecycleArticle } from '/views/articles/content/lifecycle-article';
import { MaturityArticle } from '/views/articles/content/maturity-article';
import { FromAnyToUnknown } from '/views/articles/embeds/any-to-unknown';
import { StateManagement } from '/views/articles/embeds/state-management';
import { TenetsPage } from '/views/pages/tenets/tenets-page';

export const CONTENT_MAP = {
  'do-i-need-a-design-system': DoINeedArticle,
  'from-any-to-unknown': FromAnyToUnknown,
  'state-management%3A-the-missing-manual': StateManagement,

  // 'core-tenets': TenetsPage,

  // 'icon-map': IconMapArticle,
  // 'loading-states': LoadingArticle,
  // 'labeled-input': InputArticle,
  // 'labeled-number': NumberArticle,
  // 'spacing-constants': SpacingConstants,
  // 'labeled-value': LabeledValueArticle,
  // 'generic-empty': EmptyArticle,
  // 'unsaved-changes-modal': UnsavedArticle,
  // 'string-utils': StringArticle,
  // 'type-helpers': TypeArticle,

  // 'bridging-the-chasm': BridgingTheChasmContent,
  // 'anatomy-of-a-design-system': AnatomyArticle,
  // 'documenting-a-design-system': DocumentingArticle,
  // 'design-system-lifecycle': LifecycleArticle,
  // 'design-system-maturity': MaturityArticle,
  // 'collaboration-tools-figma': FigmaArticle,
} as const;

export const makeHeaderImage = (path: string) => {
  if (!path) return undefined;
  if (window.location.hash.indexOf('docs') !== -1) return undefined;
  return {
    content: <img
      src={path}
      alt="Article header"
    />,
    height: 250,
    position: 'top' as 'top' | 'side'
  };
};

export type CONTENT_KEYS = keyof typeof CONTENT_MAP
