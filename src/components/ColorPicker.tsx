import { motion } from 'framer-motion';

interface ColorPickerProps {
  label: string;
  value: string;
  presets: string[];
  onChange: (color: string) => void;
}

const ColorPicker = ({ label, value, presets, onChange }: ColorPickerProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-10 h-10 rounded-lg cursor-pointer border-2 border-border overflow-hidden"
            style={{ padding: 0 }}
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="#000000"
        />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {presets.map((color) => (
          <motion.button
            key={color}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(color)}
            className={`w-8 h-8 rounded-lg border-2 transition-all duration-200 ${
              value === color ? 'border-primary ring-2 ring-ring' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
