import { CalligraphyDesign } from '@/types/calligraphy';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';

interface TextControlsProps {
  design: CalligraphyDesign;
  onChange: (updates: Partial<CalligraphyDesign>) => void;
}

const TextControls = ({ design, onChange }: TextControlsProps) => {
  const alignOptions: { value: 'left' | 'center' | 'right'; icon: typeof AlignLeft }[] = [
    { value: 'left', icon: AlignLeft },
    { value: 'center', icon: AlignCenter },
    { value: 'right', icon: AlignRight },
  ];

  return (
    <div className="space-y-6">
      {/* Text Input */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Your Text
        </label>
        <textarea
          value={design.text}
          onChange={(e) => onChange({ text: e.target.value })}
          placeholder="Enter your beautiful text..."
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none font-serif text-lg"
        />
      </div>

      {/* Alignment */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Alignment
        </label>
        <div className="flex gap-2">
          {alignOptions.map(({ value, icon: Icon }) => (
            <motion.button
              key={value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange({ textAlign: value })}
              className={`flex-1 p-3 rounded-lg flex items-center justify-center transition-all duration-200 ${
                design.textAlign === value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <Icon className="w-5 h-5" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Font Size
          </label>
          <span className="text-sm text-muted-foreground">{design.fontSize}px</span>
        </div>
        <Slider
          value={[design.fontSize]}
          onValueChange={([value]) => onChange({ fontSize: value })}
          min={24}
          max={120}
          step={1}
          className="w-full"
        />
      </div>

      {/* Letter Spacing */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Letter Spacing
          </label>
          <span className="text-sm text-muted-foreground">{design.letterSpacing}px</span>
        </div>
        <Slider
          value={[design.letterSpacing]}
          onValueChange={([value]) => onChange({ letterSpacing: value })}
          min={-5}
          max={20}
          step={0.5}
          className="w-full"
        />
      </div>

      {/* Line Height */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Line Height
          </label>
          <span className="text-sm text-muted-foreground">{design.lineHeight.toFixed(1)}</span>
        </div>
        <Slider
          value={[design.lineHeight]}
          onValueChange={([value]) => onChange({ lineHeight: value })}
          min={0.8}
          max={3}
          step={0.1}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TextControls;
