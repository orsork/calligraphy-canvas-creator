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
}

export interface FontOption {
  name: string;
  className: string;
  displayName: string;
}

export const FONT_OPTIONS: FontOption[] = [
  { name: 'Great Vibes', className: 'font-calligraphy-great-vibes', displayName: 'Great Vibes' },
  { name: 'Tangerine', className: 'font-calligraphy-tangerine', displayName: 'Tangerine' },
  { name: 'Alex Brush', className: 'font-calligraphy-alex-brush', displayName: 'Alex Brush' },
  { name: 'Allura', className: 'font-calligraphy-allura', displayName: 'Allura' },
  { name: 'Pinyon Script', className: 'font-calligraphy-pinyon', displayName: 'Pinyon Script' },
  { name: 'Sacramento', className: 'font-calligraphy-sacramento', displayName: 'Sacramento' },
  { name: 'Parisienne', className: 'font-calligraphy-parisienne', displayName: 'Parisienne' },
  { name: 'Dancing Script', className: 'font-calligraphy-dancing', displayName: 'Dancing Script' },
  { name: 'Playfair Display', className: 'font-calligraphy-playfair', displayName: 'Playfair Display' },
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
