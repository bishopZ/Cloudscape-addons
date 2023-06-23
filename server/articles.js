
module.exports = () => [
  {
    slug: 'loading-states',
    title: 'Loading states',
    description: 'Basic loading state components to expand the vocabulary of Cloudscape.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Details',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 2, 2021'),
    tenets: [2],
    referenceComponent: 'Spinner',
    referenceLink: 'https://cloudscape.design/components/spinner/',
    keywords: 'fancy code ndash mdash team Spinner loading optional generic state fetch medianame dashboard key \
    value html addons',
  },
  {
    slug: 'icon-map',
    title: 'Icon map',
    description: 'Developer convenience component to aid in quickly finding the name of a particular icon.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 6, 2021'),
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
    slug: 'labeled-input',
    title: 'Labeled input',
    description: 'Labeled variation of the Input component that provides smart defaults.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Forms',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 20, 2021'),
    tenets: [0, 1, 3, 4],
    referenceComponent: 'Input',
    referenceLink: 'https://cloudscape.design/components/input/',
    keywords: 'versitile majority form label accessibility usability best practice formfield type map text password \
    decimal numeric search email tel url value placeholder optional mode step addoptional aria inputprops \
    cleararialabel formfieldstrings inputchange InputKeyDetail onchange secondarycontrol readonly onkey autocomplete \
    spellcheck info error constraint onchange labeledinput addons'
  },
  {
    slug: 'labeled-number',
    title: 'Labeled number',
    description: 'Labeled number display as seen in Cloudscape Dashboard demo.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Details',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 19, 2021'),
    tenets: [0, 1],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'labelednumber form field details info error success inactive text-status-info text-status-error \
    text-status-success text-status-inactive box color loading empty dash display-l boxprops formfield \
    formfieldstrings loadingspinner status constraint description secondarycontrol stretch addons',
  },
  {
    slug: 'spacing-constants',
    title: 'Spacing constants',
    description: 'Helper file for DRYing up the use of spacing objects in your project.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 4, 2021'),
    tenets: [0, 1, 2],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'consistent interface box tool padding margin content DRY constants size xxs xs s m l xl xxl n medium\
    large small horizontal vertical directions top left bottom right developers topxxlbottoms boxprops topn topxxs \
    topn topxs tops topm topl topxl topxxl bottomn bottomxxs bottomxs bottoms bottomm bottoml bottomxl bottomxxl \
    leftn leftxxs leftxs lefts leftm leftl leftxl leftxxl rightn rightxxs rightxs rights rightm rightl rightxl \
    rightxxl verticaln verticalxxs verticalxs verticals verticalm verticall verticalxl verticalxxl horizontaln \
    horizontalxxs horizontalxs horizontals horizontalm horizontall horizontalxl horizontalxxl none addons'
  },
  {
    slug: 'generic-empty',
    title: 'Generic empty',
    description: 'Simple components designed to speed up creation of new Tables.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Tables',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 8, 2021'),
    tenets: [2, 3],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'table configuration collection hools items states filter matches patterns reusable smart defaults \
    title description buttonname onclick standard continuation refresh nomatch clear defaults Implementation \
    usecollection collectionsettings filterprops collectionprops button box spacebetween fontweight spacing addons',
  },
  {
    slug: 'labeled-value',
    title: 'Labeled value',
    description: 'A simple, generic component for a common Details page pattern.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Details',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 10, 2021'),
    tenets: [1, 2],
    referenceComponent: 'Dashboard',
    referenceLink: 'https://cloudscape.design/examples/react/dashboard.html',
    keywords: 'formfield form field wrap details labeledvalue keyvalue key-value value consistent naming \
    box keyvalueprops label children addons',
  },
  {
    slug: 'unsaved-changes-modal',
    title: 'Unsaved changes modal',
    description: 'The modal described in the documentation for Cloudscape\'s Wizard Component.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Forms',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 12, 2021'),
    tenets: [0, 2],
    referenceComponent: 'Wizard',
    referenceLink: 'https://cloudscape.design/components/wizard/',
    keywords: 'unsavedchangesmodal comprehensive wizard ux designer pattern form value navigates page lost alert \
    box button spacebetween visible ondismiss onconfirm warning leave continue addons',
  },
  {
    slug: 'string-utils',
    title: 'String utils',
    description: 'A collection of localization-friendly string utility functions \
    for use with tables, dates, and S3 resources.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 14, 2021'),
    tenets: [0, 1, 2, 3],
    keywords: 'utilities localization internationlization l10n l18n multi-language addoptional form fields optional \
    label title translated heading-s inline-block ariarequired required formatdate absolute relativedash fallback \
    toLocaleDateString LOCALE year month day week minute second moment makecounter table header s3 resource \
    selector location uri aws sdk bucketname box makeS3Location addons',
  },
  {
    slug: 'type-helpers',
    title: 'Type helpers',
    description: 'A collection of Typescript definitions that make your code more readible.',
    image: 'assets/chasm.jpg',
    format: 'Documentation',
    topic: 'Components',
    discipline: 'Engineering',
    section: 'Helpers',
    vendor: 'Cloudscape',
    publicationDate: new Date('Jun 16, 2021'),
    tenets: [1, 4],
    keywords: 'addons',
  },
  {
    slug: 'do-i-need-a-design-system',
    title: 'Do I need a design system?',
    description: 'As designers and developers, we\'re often asked how to approach design systems, and when to consider using them.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Vitra_Design_Museum.JPG/320px-Vitra_Design_Museum.JPG',
    format: 'Article',
    topic: 'Design systems',
    discipline: 'Product',
    section: 'Tools',
    publicationDate: new Date('Jun 1, 2021'),
    keywords: 'key factors scale longevity necessary organization skilled design work system priority brand lifespan risks stability \
    choice options',
  },
  {
    slug: 'bridging-the-chasm',
    title: 'Design and development collaboratation',
    description: 'Harmonious collaboration between design and development is crucial for crafting outstanding user experiences.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Collaboration_power.png/320px-Collaboration_power.png',
    format: 'Article',
    topic: 'Collaboration',
    discipline: 'Product',
    section: 'Tools',
    publicationDate: new Date('Jun 3, 2021'),
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
    slug: 'anatomy-of-a-design-system',
    title: 'Anatomy of a Design System',
    description: 'A design system consists of several key elements that work together to provide a cohesive and standardized approach to digital design.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Parts_of_clarinet_6.jpg/1024px-Parts_of_clarinet_6.jpg',
    format: 'Article',
    topic: 'Design systems',
    discipline: 'Design',
    section: 'Foundation',
    author: 'Chad Lumley & Bishop Zareh',
    publicationDate: new Date('Jun 5, 2021'),
    keywords: 'anatomy digital design foundations layer elements development interfaces principles iconography guidelines logos \
    typefaces illustration sound voice tone photography motion layout elevation color identity lanugage \
    tokens decisions attributes spacing opacity radii volume borders timing consistent global platforms \
    product scalability change multi-platform support unified process core collection building block \
    reusable components patterns grid scale animation component buttons search bars text inputs notifications \
    breadcrumbs tabs tooltips radio ecosystem',
  },
  {
    slug: 'documenting-a-design-system',
    title: 'Documenting design systems',
    description: 'Document your design system with assets, process and documentation.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Austria_-_G%C3%B6ttweig_Abbey_-_2015.jpg/320px-Austria_-_G%C3%B6ttweig_Abbey_-_2015.jpg',
    format: 'Article',
    topic: 'Design systems',
    discipline: 'Writing',
    section: 'Delivery',
    author: 'Chad Lumley & Bishop Zareh',
    publicationDate: new Date('Jun 7, 2021'),
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
    slug: 'design-system-lifecycle',
    title: 'Design system lifecycle',
    description: 'Explores the stages of a design system\'s maturity.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/PENGUIN_LIFECYCLE_H.JPG/320px-PENGUIN_LIFECYCLE_H.JPG',
    format: 'Article',
    topic: 'Design systems',
    discipline: 'Design',
    section: 'Delivery',
    author: 'Chad Lumley & Bishop Zareh',
    publicationDate: new Date('Jun 9, 2021'),
    keywords: 'superheros digital interface mature win joke potential journey stages model \
    version ingredients balance present dicovering combination principals tokens core \
    adoption obvious charming associated instructions showcase choice teenage foundation \
    growth nurturing mindset promise improving time healthy platform wise leader organization \
    guru guiding greatness evolving adapt',
  },
  {
    slug: 'design-system-maturity',
    title: 'Maturing a design system',
    description: 'How to advance the maturity of your design system.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/PENGUIN_LIFECYCLE_H.JPG/320px-PENGUIN_LIFECYCLE_H.JPG',
    format: 'Article',
    topic: 'Design systems',
    discipline: 'Design',
    section: 'Delivery',
    author: 'Chad Lumley & Bishop Zareh',
    publicationDate: new Date('Jun 11, 2021'),
    keywords: 'game educate engage knowledge potential purpose \
    benefits approach vision elighten colleagues two-way conversation users learn listen \
    needs voice recruit adopters contributors heros future continuous improvement \
    scientist perfecting edge',
  },
  {
    slug: 'collaboration-tools-figma',
    title: 'Collaborative design with Figma',
    description: 'Articulation of the features and advantages of Figma as a \
    collaborative design & feedback tool.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Figma-dynamic-gradient.png/768px-Figma-dynamic-gradient.png',
    format: 'Article',
    topic: 'Collaboration',
    discipline: 'Design',
    section: 'Tools',
    vendor: 'Figma',
    author: 'Bishop Zareh',
    publicationDate: new Date('Jun 13, 2021'),
    keywords: 'tolls adoption designers developers shared platforms real-time editing commenting \
    version control process exchange ideas vision implementation robust effective simultaneous \
    feedback interation components libraries projects team unified coherent contextual channels',
  },
] .filter(item => {
  if (!item.publicationDate) return false;
  const today = new Date();
  if (today > item.publicationDate) return true;
  return false;
});
