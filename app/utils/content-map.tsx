import React from 'react';

import { EmptyArticle } from '/views/articles/addons/empty-article';
import { IconMapArticle } from '/views/articles/addons/icon-map-article';
// import { InputArticle } from '/views/articles/addons/input-article';
// import { LabeledValueArticle } from '/views/articles/addons/labeled-value-article';
import { LoadingArticle } from '/views/articles/addons/loading-article';
// import { NumberArticle } from '/views/articles/addons/number-article';
import { SpacingConstants } from '/views/articles/addons/spacing-article';
// import { StringArticle } from '/views/articles/addons/string-article';
import { TypeArticle } from '/views/articles/addons/type-article';
// import { UnsavedArticle } from '/views/articles/addons/unsaved-article';
import { AnatomyArticle } from '/views/articles/content/anatomy-article';
import { BridgingTheChasmContent } from '/views/articles/content/bridging-the-chasm';
import { DoINeedArticle } from '/views/articles/content/do-i-need-article';
// import { DocumentingArticle } from '/views/articles/content/documenting-article';
import { FigmaArticle } from '/views/articles/content/figma-article';
// import { LifecycleArticle } from '/views/articles/content/lifecycle-article';
import { MaturityArticle } from '/views/articles/content/maturity-article';
import { FromAnyToUnknown } from '/views/articles/embeds/any-to-unknown';
import { ComeHomeJulie } from '/views/articles/embeds/come-home-julie';
import { DesignDirectorDance } from '/views/articles/embeds/design-directors-dance';
import { FlockingBehavior } from '/views/articles/embeds/flocking-behavior';
import { FourthScreen } from '/views/articles/embeds/fourth-screen';
import { Matter } from '/views/articles/embeds/matter';
import { NftCreativeWork } from '/views/articles/embeds/nft-creative-work';
import { NNGGenUIOutcome } from '/views/articles/embeds/nng-genui-outcome';
import { OfficePet } from '/views/articles/embeds/office-pet';
import { RedesigningRetail } from '/views/articles/embeds/redesigning-retail';
import { SoftwareEngineeringAI } from '/views/articles/embeds/software-engineering-and-ai';
import { StateManagement } from '/views/articles/embeds/state-management';
import { SyntheticData } from '/views/articles/embeds/synthetic-data';
import { ThirdPartyCookies } from '/views/articles/embeds/third-party-cookies';
import { AspenGiveAFlake } from '/views/articles/slideshows/aspen-give-a-flake';
import { DigitalLife } from '/views/articles/slideshows/digital-life';
// import { TenetsPage } from '/views/pages/tenets/tenets-page';

export const CONTENT_MAP = {
  'aspen-give-a-flake': AspenGiveAFlake,
  'design-directors-dance-with-ai': DesignDirectorDance,
  'software-engineering-and-ai': SoftwareEngineeringAI,
  'synthetic-data-lessons-learned': SyntheticData,
  'karsh-hagan-office-pet': OfficePet,
  'genui-outcome-design-nng': NNGGenUIOutcome,
  'fourth-screen-screen-readers-frontend': FourthScreen,
  'do-i-need-a-design-system': DoINeedArticle,
  'from-any-to-unknown': FromAnyToUnknown,
  'state-management:-the-missing-manual': StateManagement,
  'redesigning-retail': RedesigningRetail,
  'using-nfts-to-protect-creative-works': NftCreativeWork,
  'third-party-cookies': ThirdPartyCookies,
  'bridging-the-chasm': BridgingTheChasmContent,
  'collaboration-tools-figma': FigmaArticle,
  'matter-thought-leadership': Matter,
  'growing-your-design-system': MaturityArticle,
  'att-digital-life-web-3d': DigitalLife,
  'flocking-behavior-project': FlockingBehavior,
  'american-analog-set-res-fest': ComeHomeJulie,

  // 'core-tenets': TenetsPage,

  'cloudscape-type-helpers': TypeArticle,
  'cloudscape-spacing-constants': SpacingConstants,
  'cloudscape-icon-map': IconMapArticle,
  'loading-states': LoadingArticle,
  // 'labeled-input': InputArticle,
  // 'labeled-number': NumberArticle,
  // 'labeled-value': LabeledValueArticle,
  'generic-empty': EmptyArticle,
  // 'unsaved-changes-modal': UnsavedArticle,
  // 'string-utils': StringArticle,

  'anatomy-of-a-design-system': AnatomyArticle,
  // 'documenting-a-design-system': DocumentingArticle,
  // 'design-system-lifecycle': LifecycleArticle,

} as const;

export const makeHeaderImage = (path: string) => {
  if (!path) return undefined;
  if (window.location.hash.indexOf('docs') !== -1) return undefined;
  return {
    content: <img
      src={path}
      alt="Article header"
    />,
    height: 275,
    position: 'top' as 'top' | 'side'
  };
};

export type CONTENT_KEYS = keyof typeof CONTENT_MAP
