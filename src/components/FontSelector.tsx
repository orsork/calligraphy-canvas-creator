import { FONT_OPTIONS, FontOption } from '@/types/calligraphy';
import { motion } from 'framer-motion';

interface FontSelectorProps {
  selectedFont: string;
  onSelect: (font: string) => void;
}

const FontSelector = ({ selectedFont, onSelect }: FontSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Font Style
      </label>
      <div className="grid grid-cols-1 gap-2 max-h-[280px] overflow-y-auto pr-2">
        {FONT_OPTIONS.map((font: FontOption) => (
          <motion.button
            key={font.name}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(font.name)}
            className={`p-3 rounded-lg text-left transition-all duration-200 ${
              selectedFont === font.name
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
            }`}
          >
            <span className={`${font.className} text-xl`}>{font.displayName}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FontSelector;
