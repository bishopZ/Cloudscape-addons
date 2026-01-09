
export const articles = () => [


  // {
  //   slug: 'labeled-number',
  //   title: 'Cloudscape labeled number',
  //   name: 'Labeled number',
  //   description: 'Labeled number display as seen in Cloudscape Dashboard demo.',
  //   image: 'images/chasm.webp',
  //   format: 'Documentation',
  //   topic: 'Components',
  //   discipline: 'Engineering',
  //   section: 'Data Display',
  //   vendor: 'Cloudscape',
  //   publicationDate: new Date('Jun 23, 2023'),
  //   tenets: [0, 1],
  //   referenceComponent: 'Dashboard',
  //   referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
  //   keywords: 'labelednumber form field details info error success inactive text-status-info text-status-error \
  //   text-status-success text-status-inactive box color loading empty dash display-l boxprops formfield \
  //   formfieldstrings loadingspinner status constraint description secondarycontrol stretch addons',
  // },

// {
  //   slug: 'labeled-input',
  //   title: 'Cloudscape labeled input',
  //   name: 'Labeled input',
  //   description: 'Labeled variation of the Input component that provides smart defaults.',
  //   image: 'images/chasm.webp',
  //   format: 'Documentation',
  //   topic: 'Components',
  //   discipline: 'Engineering',
  //   section: 'Forms',
  //   vendor: 'Cloudscape',
  //   publicationDate: new Date('Jun 24, 2023'),
  //   tenets: [0, 1, 3, 4],
  //   referenceComponent: 'Input',
  //   referenceLink: 'https://cloudscape.design/components/input/',
  //   keywords: 'versitile majority form label accessibility usability formfield type map text password \
  //   decimal numeric search email tel url value placeholder optional mode step addoptional aria inputprops \
  //   cleararialabel formfieldstrings inputchange InputKeyDetail onchange secondarycontrol readonly onkey autocomplete \
  //   spellcheck info error constraint onchange labeledinput addons'
  // },

  {
    slug: 'labeled-value',
    title: 'Cloudscape labeled value',
    name: 'Labeled value',
    description: 'A simple, generic component for a common Details page pattern.',
    image: '/images/cloudscape-labeled-value.png',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Data Display',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jan 13, 2026'),
    tenets: [1, 2],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'formfield form field wrap details labeledvalue keyvalue key-value value consistent naming \
    box keyvalueprops label children addons',
  },


  {
    slug: 'unsaved-changes-modal',
    title: 'Cloudscape unsaved changes modal',
    name: 'Unsaved changes modal',
    description: 'The modal described in the documentation for Cloudscape\'s Wizard Component.',
    image: '/images/unsaved-changes.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Forms',
    vendor: 'Cloudscape',
    publicationDate: new Date('Dec 16, 2025'),
    tenets: [0, 2],
    referenceComponent: 'Wizard',
    referenceLink: 'https://cloudscape.design/components/wizard/',
    keywords: 'unsavedchangesmodal comprehensive wizard ux designer pattern form value navigates page lost alert \
    box button spacebetween visible ondismiss onconfirm warning leave continue addons',
  },

    {
    slug: 'design-system-lifecycle',
    title: 'Lifecycle of a design system',
    description: 'Explores the stages of a design system\'s maturity.',
    image: '/images/lifecycle-design-system.webp',
    format: 'Article',
    topic: 'Design system',
    discipline: 'Design',
    section: 'Delivery',
    author: 'Bishop Zareh',
    publicationDate: new Date('Sept 23, 2025'),
    keywords: 'superheros digital interface mature win joke potential journey stages model \
    version ingredients balance present dicovering combination principals tokens core \
    adoption obvious charming associated instructions showcase choice teenage foundation \
    growth nurturing mindset promise improving time healthy platform wise leader organization \
    guru guiding greatness evolving adapt',
  },

  {
    slug: 'documenting-a-design-system',
    title: 'Documenting a design system',
    description: 'Document your design system with assets, process and documentation.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Austria_-_G%C3%B6ttweig_Abbey_-_2015.jpg/960px-Austria_-_G%C3%B6ttweig_Abbey_-_2015.jpg',
    format: 'Article',
    topic: 'Design system',
    discipline: 'Writing',
    section: 'Delivery',
    author: 'Bishop Zareh',
    publicationDate: new Date('Jun 23, 2025'),
    keywords: 'centralized scalable cohesive potential clear communicates assets processes guidelines \
    teams consistency efficiency collaboration tangible layered logo files brand identity tokens CSS primitive \
    color palette core sass layout mixin interfaces components figma buttons product human behaviors actions \
    governance development maintenance usage contibution evaluating approving changes evolution \
    synchronization projects deprecation outdated release versioning updates extention variation \
    customization onboarding backbone rationale purpose owns beliefs philohophies reasoning benefits \
    decisions explainations describe functionality migration transition outline recommended scenarios \
    individuals location where assets resources examples showcase real-world inspiration',
  },
  {
    slug: 'string-utils',
    title: 'Cloudscape string utilities',
    name: 'String utilities',
    description: 'A collection of localization-friendly string utility functions \
    for use with tables, dates, and S3 resources.',
    image: '/images/string-utils.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 17, 2025'),
    tenets: [0, 1, 2, 3],
    keywords: 'utilities localization internationalization l10n l18n multi-language addoptional form fields optional \
    label title translated heading-s inline-block ariarequired required formatdate absolute relativedash fallback \
    toLocaleDateString LOCALE year month day week minute second moment makecounter table header s3 resource \
    selector location uri aws sdk bucketname box makeS3Location addons',
  },

  {
    slug: 'generic-empty',
    title: 'Cloudscape empty state',
    name: 'Generic empty state',
    description: 'Simple components designed to speed up creation of new Tables.',
    image: '/images/empty-states.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Tables',
    vendor: 'Cloudscape',
    publicationDate: new Date('Apr 24, 2025'),
    tenets: [2, 3],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'table configuration collection hools items states filter matches patterns reusable smart defaults \
    title description buttonname onclick standard continuation refresh nomatch clear defaults Implementation \
    usecollection collectionsettings filterprops collectionprops button box spacebetween fontweight spacing addons',
  },

 {
    slug: 'anatomy-of-a-design-system',
    title: 'Anatomy of a design system',
    description: 'A design system have several key elements that work together to provide a standardized approach to software design.',
    image: '/images/anatomy-of-a-design-system.webp',
    format: 'Article',
    topic: 'Design System',
    discipline: 'Design',
    section: 'Foundation',
    author: 'Bishop Zareh',
    publicationDate: new Date('Jan 12, 2025'),
    keywords: 'anatomy digital design foundations layer elements development interfaces principles iconography guidelines logos \
    typefaces illustration sound voice tone photography motion layout elevation color identity lanugage \
    tokens decisions attributes spacing opacity radii volume borders timing consistent global platforms \
    product scalability change multi-platform support unified process core collection building block \
    reusable components patterns grid scale animation component buttons search bars text inputs notifications \
    breadcrumbs tabs tooltips radio ecosystem',
  },

  {
    slug: 'loading-states',
    title: 'Cloudscape loading states',
    name: 'Loading states',
    description: 'Basic loading state components to expand the vocabulary of the Cloudscape.',
    image: '/images/better-loading-state.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Data Display',
    vendor: 'Cloudscape',
    publicationDate: new Date('Nov 3, 2024'),
    tenets: [2],
    referenceComponent: 'Spinner',
    referenceLink: 'https://cloudscape.design/components/spinner/',
    keywords: 'fancy code ndash mdash team Spinner loading optional generic state fetch medianame dashboard key \
    value html addons empty zero value',
  },

  {
    slug: 'cloudscape-icon-map',
    title: 'Cloudscape icon map',
    name: 'Icon map',
    description: 'Developer convenience component to aid in quickly finding the name of a particular icon.',
    image: '/images/Firefly+cloudscape+icon+map+19359.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Aug 10, 2024'),
    tenets: [0],
    referenceComponent: 'Icon',
    referenceLink: 'https://cloudscape.design/components/icon/',
    keywords: 'icons set preview design simple find tool speed box grid spacebetween spacing plus \
      double angle arrow left full audio half off bug call calendar caret filled right \
      check contact close copy delete marker download drag indicator edit ellipsis envelope expand external \
      file filter flag open folder group active heart insert row keyboard lock private menu \
      microphone microphone multiscreen notification redo refresh remove resize area script search security \
      settings share shrink status progress info negative pending positive stopped \
      warning suggestions thumbs up ticket collapse \
      treeview expand undo unlocked upload user profile user profile video on\
      video unavailable view horizontal vertical zoom out to fit addons',
  },

  {
    slug: 'cloudscape-spacing-constants',
    title: 'Cloudscape spacing constants',
    name: 'Spacing constants',
    description: 'Helper file for DRYing up the use of spacing objects in your application.',
    image: '/images/cloudscape-spacing-constants.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 3, 2024'),
    tenets: [0, 1, 2],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'consistent interface helper box tool padding margin content DRY constants size xxs xs s m l xl xxl n medium\
    large small horizontal vertical directions top left bottom right developers topxxlbottoms boxprops topn topxxs \
    topn topxs tops topm topl topxl topxxl bottomn bottomxxs bottomxs bottoms bottomm bottoml bottomxl bottomxxl \
    leftn leftxxs leftxs lefts leftm leftl leftxl leftxxl rightn rightxxs rightxs rights rightm rightl rightxl \
    rightxxl verticaln verticalxxs verticalxs verticals verticalm verticall verticalxl verticalxxl horizontaln \
    horizontalxxs horizontalxs horizontals horizontalm horizontall horizontalxl horizontalxxl none addons'
  },
  {
    slug: 'growing-your-design-system',
    title: 'Growing your design system',
    description: 'Exploring the intricacies of the process of maturing a design system.',
    image: '/images/Firefly+maturity+of+a+design+system+83235.webp',
    format: 'Article',
    topic: 'Design System',
    discipline: 'Product',
    section: 'Delivery',
    author: 'Bishop Zareh',
    publicationDate: new Date('May 28, 2024'),
    keywords: 'game educate engage knowledge potential purpose \
    benefits approach vision elighten colleagues two-way conversation users learn listen \
    needs voice recruit adopters contributors heros future continuous improvement \
    scientist perfecting edge evolve',
  },

  {
    slug: 'cloudscape-type-helpers',
    title: 'Cloudscape type helpers',
    description: 'A collection of Typescript definitions that make your code more readable.',
    image: '/images/clouds.webp',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('May 9, 2024'),
    tenets: [1, 4],
    keywords: 'typescript addons definitions name internal intuitive readability generic shape non-cancelable \
    preventdefault strict typechecking static \
    wrappers event handler definition list inference engine variables object fruits apple grape bland \
    BreadcrumbGroupProps, ButtonDropdownProps, ButtonProps, CalendarProps, CardsProps, CheckboxProps, \
    CollectionPreferencesProps, DateRangePickerProps, ExpandableSectionProps, FlashbarProps, GridProps, \
    InputProps, LinkProps, ModalProps, MultiselectProps, NonCancelableCustomEvent, RadioGroupProps, \
    SegmentedControlProps, SelectProps, SideNavigationProps, TableProps, TabsProps, TagEditorProps, \
    TextFilterProps, TilesProps, ToggleProps, TokenGroupProps, WizardProps NonCancelableEventHandler \
    GenericObject Record string unknown valueof keyof typeof buttonclick buttonfollow buttondropclick \
    cardschange calendarchange checkboxchange columnwidthschange daterangechange expandablechange \
    inputchange inputkeydetail linkfollow modaldismiss mutilselectchange preferenceconfirm \
    radiochange rowclick sementedchange selectchange selectload sidenavchange sidenavfollow \
    tabchange tableselectionchange tablesortchange tageditorchange textfilterchange tilechange \
    tokendismiss togglechange wizardnavigate breadcrumb buttondropitems cardsdefinition \
    cardSection cardslayout flashbarmessages griddefinition multiselectdoptions radioitems \
    sidenavheader sidenavitems segmentedoptions tabs tags tablecolumn tileitems timerangeoptions \
    tokenitems wizardsteps',
  },

  {
    slug: 'collaboration-tools-figma',
    title: 'Collaborative design with Figma',
    description: 'Articulation of the features and advantages of Figma as a \
    collaborative design & feedback tool.',
    image: '/images/Figma+collaborative+design+software+25-01-2025+at+17-15-43.webp',
    format: 'Article',
    topic: 'Collaboration',
    discipline: 'Design',
    section: 'Tools',
    vendor: 'Figma',
    author: 'Bishop Zareh',
    publicationDate: new Date('Feb 22, 2024'),
    keywords: 'tolls adoption designers developers shared platforms real-time editing commenting \
    version control process exchange ideas vision implementation robust effective simultaneous \
    feedback interation components libraries projects team unified coherent contextual channels design system',
  },
  {
    slug: 'bridging-the-chasm',
    title: 'Bridging the chasm',
    description: 'Fostering harmonious collaboration between design and development is crucial for crafting outstanding user experiences.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Colaboraci%C3%B3n.jpg',
    format: 'Article',
    topic: 'Collaboration',
    discipline: 'Product',
    section: 'Tools',
    author: 'Bishop Zareh',
    publicationDate: new Date('Jan 9, 2024'),
    keywords: 'software engineering divide potential bridge gap insights synergy design thinking agile \
    development methodologies collaborative tools integrated workflows digital innovation symbiotic relationship \
    professionals landscape diversity bootcamps worldwide framework pragmatic stragey evidence-based langauge \
    barrier communication terminology vocabulary principles mindset creativity logic perspective organization \
    cross-disciplinary coexist divergent innovation change wireframes comps supporting documents hairball \
    shared unexpected meetings process product intent vision solutions mininterprestation compromise loss \
    ideal expertise skills clear channels stand-ups status updates project goals constriants alignment lines \
    limitations standpoint empathy end users user experience collaborative adoption platforms real-time editing \
    version control exchange ideas project design system feedback commenting contextual iterative workshops \
    knowledge-sharing holistic product ownership lifecycle foundation user-centric training',
  },
  {
    slug: 'do-i-need-a-design-system',
    title: 'Do I need a design system?',
    description: 'I\'m often asked how to approach design systems, and when to consider using them.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Lou_Ruovo_Center_for_Brain_Health.jpg',
    format: 'Article',
    discipline: 'Product',
    section: 'Tools',
    topic: 'Design System',
    author: 'Bishop Zareh',
    publicationDate: new Date('Dec 16, 2023'),
    keywords: 'key factors scale longevity necessary organization skilled design work system priority brand lifespan risks stability \
    choice options',
  },

] .filter(item => {
  if (!item.publicationDate) return false;
  const today = new Date();
  if (today > item.publicationDate) return true;
  return false;
});
