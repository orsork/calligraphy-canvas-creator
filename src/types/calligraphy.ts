export interface TextShadow {
  enabled: boolean;
  offsetX: number;
  offsetY: number;
  blur: number;
  color: string;
}

export interface TextOutline {
  enabled: boolean;
  width: number;
  color: string;
}

export interface CalligraphyDesign {
  id: string;
  text: string;
  fontFamily: string;
  fontSize: number;
  textColor: string;
  backgroundColor: string;
  textAlign: 'left' | 'center' | 'right';
  letterSpacing: number;
  lineHeight: number;
  createdAt: number;
  name: string;
  textShadow: TextShadow;
  textOutline: TextOutline;
}

export interface FontOption {
  name: string;
  className: string;
  displayName: string;
}

export const FONT_OPTIONS: FontOption[] = [
  // =========================
  // Elegant Script (12 fonts)
  // =========================
  { name: 'Great Vibes', className: 'font-calligraphy-great-vibes', displayName: 'Great Vibes' },
  { name: 'Allura', className: 'font-calligraphy-allura', displayName: 'Allura' },
  { name: 'Alex Brush', className: 'font-calligraphy-alex-brush', displayName: 'Alex Brush' },
  { name: 'Pinyon Script', className: 'font-calligraphy-pinyon', displayName: 'Pinyon Script' },
  { name: 'Sacramento', className: 'font-calligraphy-sacramento', displayName: 'Sacramento' },
  { name: 'Parisienne', className: 'font-calligraphy-parisienne', displayName: 'Parisienne' },
  { name: 'Tangerine', className: 'font-calligraphy-tangerine', displayName: 'Tangerine' },
  { name: 'Ballet', className: 'font-calligraphy-ballet', displayName: 'Ballet' },
  { name: 'Carattere', className: 'font-calligraphy-carattere', displayName: 'Carattere' },
  { name: 'WindSong', className: 'font-calligraphy-windsong', displayName: 'WindSong' },
  { name: 'Mea Culpa', className: 'font-calligraphy-mea-culpa', displayName: 'Mea Culpa' },
  { name: 'Lavishly Yours', className: 'font-calligraphy-lavishly', displayName: 'Lavishly Yours' },

  // =========================
  // Formal Script (10 fonts)
  // =========================
  { name: 'Monsieur La Doulaise', className: 'font-calligraphy-monsieur', displayName: 'Monsieur La Doulaise' },
  { name: 'Mrs Saint Delafield', className: 'font-calligraphy-mrs-saint', displayName: 'Mrs Saint Delafield' },
  { name: 'Petit Formal Script', className: 'font-calligraphy-petit', displayName: 'Petit Formal' },
  { name: 'Italianno', className: 'font-calligraphy-italianno', displayName: 'Italianno' },
  { name: 'Herr Von Muellerhoff', className: 'font-calligraphy-herr-von', displayName: 'Herr Von Muellerhoff' },
  { name: 'Mr Dafoe', className: 'font-calligraphy-mr-dafoe', displayName: 'Mr Dafoe' },
  { name: 'Bilbo Swash Caps', className: 'font-calligraphy-bilbo-swash', displayName: 'Bilbo Swash' },
  { name: 'Qwitcher Grypen', className: 'font-calligraphy-qwitcher', displayName: 'Qwitcher Grypen' },
  { name: 'Imperial Script', className: 'font-calligraphy-imperial', displayName: 'Imperial Script' },
  { name: 'Fleur De Leah', className: 'font-calligraphy-fleur', displayName: 'Fleur De Leah' },

  // =========================
  // Casual Script (10 fonts)
  // =========================
  { name: 'Dancing Script', className: 'font-calligraphy-dancing', displayName: 'Dancing Script' },
  { name: 'Satisfy', className: 'font-calligraphy-satisfy', displayName: 'Satisfy' },
  { name: 'Marck Script', className: 'font-calligraphy-marck', displayName: 'Marck Script' },
  { name: 'Clicker Script', className: 'font-calligraphy-clicker', displayName: 'Clicker Script' },
  { name: 'Niconne', className: 'font-calligraphy-niconne', displayName: 'Niconne' },
  { name: 'Euphoria Script', className: 'font-calligraphy-euphoria', displayName: 'Euphoria Script' },
  { name: 'Rouge Script', className: 'font-calligraphy-rouge', displayName: 'Rouge Script' },
  { name: 'Pacifico', className: 'font-calligraphy-pacifico', displayName: 'Pacifico' },
  { name: 'Grand Hotel', className: 'font-calligraphy-grand-hotel', displayName: 'Grand Hotel' },
  { name: 'Damion', className: 'font-calligraphy-damion', displayName: 'Damion' },

  // =========================
  // Playful & Bold (8 fonts)
  // =========================
  { name: 'Kaushan Script', className: 'font-calligraphy-kaushan', displayName: 'Kaushan Script' },
  { name: 'Yellowtail', className: 'font-calligraphy-yellowtail', displayName: 'Yellowtail' },
  { name: 'Cookie', className: 'font-calligraphy-cookie', displayName: 'Cookie' },
  { name: 'Lobster', className: 'font-calligraphy-lobster', displayName: 'Lobster' },
  { name: 'Courgette', className: 'font-calligraphy-courgette', displayName: 'Courgette' },
  { name: 'Norican', className: 'font-calligraphy-norican', displayName: 'Norican' },
  { name: 'Oleo Script', className: 'font-calligraphy-oleo', displayName: 'Oleo Script' },
  { name: 'Berkshire Swash', className: 'font-calligraphy-berkshire', displayName: 'Berkshire Swash' },

  // =========================
  // Handwritten / Brush (8 fonts)
  // =========================
  { name: 'Caveat', className: 'font-calligraphy-caveat', displayName: 'Caveat' },
  { name: 'Kalam', className: 'font-calligraphy-kalam', displayName: 'Kalam' },
  { name: 'Rock Salt', className: 'font-calligraphy-rock-salt', displayName: 'Rock Salt' },
  { name: 'Shadows Into Light', className: 'font-calligraphy-shadows', displayName: 'Shadows Into Light' },
  { name: 'Calligraffitti', className: 'font-calligraphy-calligraffitti', displayName: 'Calligraffitti' },
  { name: 'Homemade Apple', className: 'font-calligraphy-homemade', displayName: 'Homemade Apple' },
  { name: 'Reenie Beanie', className: 'font-calligraphy-reenie', displayName: 'Reenie Beanie' },
  { name: 'Gloria Hallelujah', className: 'font-calligraphy-gloria', displayName: 'Gloria Hallelujah' },

  // =========================
  // Serif / Display (6 fonts)
  // =========================
  { name: 'Playfair Display', className: 'font-calligraphy-playfair', displayName: 'Playfair Display' },
  { name: 'Cormorant Garamond', className: 'font-calligraphy-cormorant', displayName: 'Cormorant Garamond' },
  { name: 'Cinzel', className: 'font-calligraphy-cinzel', displayName: 'Cinzel' },
  { name: 'EB Garamond', className: 'font-calligraphy-eb-garamond', displayName: 'EB Garamond' },
  { name: 'Libre Baskerville', className: 'font-calligraphy-libre-baskerville', displayName: 'Libre Baskerville' },
  { name: 'Spectral', className: 'font-calligraphy-spectral', displayName: 'Spectral' },
];

export const COLOR_PRESETS = [
  '#1a1a1a', '#2d2d2d', '#4a4a4a',
  '#8b4513', '#654321', '#3d2314',
  '#1e3a5f', '#2c5282', '#1a365d',
  '#2f5d3a', '#276749', '#1c4532',
  '#742a2a', '#9b2c2c', '#c53030',
  '#553c9a', '#6b46c1', '#805ad5',
];

export const BACKGROUND_PRESETS = [
  '#ffffff', '#faf8f5', '#f5f0e8',
  '#fffef0', '#fefce8', '#fef3c7',
  '#f0fdf4', '#ecfdf5', '#d1fae5',
  '#eff6ff', '#dbeafe', '#bfdbfe',
  '#fdf2f8', '#fce7f3', '#fbcfe8',
  '#1a1a1a', '#2d2d2d', '#374151',
];

export const SHADOW_COLOR_PRESETS = [
  '#00000040', '#00000080', '#000000',
  '#1a1a1a80', '#2d2d2d80', '#4a4a4a80',
  '#8b451380', '#65432180', '#3d231480',
];
