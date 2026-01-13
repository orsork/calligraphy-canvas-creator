import { CalligraphyDesign, SHADOW_COLOR_PRESETS } from '@/types/calligraphy';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';

interface TextEffectsProps {
  design: CalligraphyDesign;
  onChange: (updates: Partial<CalligraphyDesign>) => void;
}

const TextEffects = ({ design, onChange }: TextEffectsProps) => {
  const updateShadow = (updates: Partial<CalligraphyDesign['textShadow']>) => {
    onChange({
      textShadow: { ...design.textShadow, ...updates },
    });
  };

  const updateOutline = (updates: Partial<CalligraphyDesign['textOutline']>) => {
    onChange({
      textOutline: { ...design.textOutline, ...updates },
    });
  };

  return (
    <div className="space-y-6">
      {/* Text Shadow */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Text Shadow
          </label>
          <Switch
            checked={design.textShadow?.enabled ?? false}
            onCheckedChange={(enabled) => updateShadow({ enabled })}
          />
        </div>

        {design.textShadow?.enabled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 pl-1"
          >
            {/* Shadow Color */}
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">Shadow Color</label>
              <div className="flex flex-wrap gap-2">
                {SHADOW_COLOR_PRESETS.map((color) => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updateShadow({ color })}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      design.textShadow?.color === color
                        ? 'border-primary ring-2 ring-primary/30'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <input
                  type="color"
                  value={design.textShadow?.color?.replace(/[0-9a-f]{2}$/i, '') || '#000000'}
                  onChange={(e) => updateShadow({ color: e.target.value + '80' })}
                  className="w-7 h-7 rounded-full cursor-pointer border-2 border-border"
                />
              </div>
            </div>

            {/* Offset X */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-muted-foreground">Horizontal Offset</label>
                <span className="text-xs text-muted-foreground">{design.textShadow?.offsetX ?? 2}px</span>
              </div>
              <Slider
                value={[design.textShadow?.offsetX ?? 2]}
                onValueChange={([value]) => updateShadow({ offsetX: value })}
                min={-20}
                max={20}
                step={1}
                className="w-full"
              />
            </div>

            {/* Offset Y */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-muted-foreground">Vertical Offset</label>
                <span className="text-xs text-muted-foreground">{design.textShadow?.offsetY ?? 2}px</span>
              </div>
              <Slider
                value={[design.textShadow?.offsetY ?? 2]}
                onValueChange={([value]) => updateShadow({ offsetY: value })}
                min={-20}
                max={20}
                step={1}
                className="w-full"
              />
            </div>

            {/* Blur */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-muted-foreground">Blur</label>
                <span className="text-xs text-muted-foreground">{design.textShadow?.blur ?? 4}px</span>
              </div>
              <Slider
                value={[design.textShadow?.blur ?? 4]}
                onValueChange={([value]) => updateShadow({ blur: value })}
                min={0}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </div>

      <div className="h-px bg-border" />

      {/* Text Outline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Text Outline
          </label>
          <Switch
            checked={design.textOutline?.enabled ?? false}
            onCheckedChange={(enabled) => updateOutline({ enabled })}
          />
        </div>

        {design.textOutline?.enabled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 pl-1"
          >
            {/* Outline Color */}
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">Outline Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={design.textOutline?.color || '#000000'}
                  onChange={(e) => updateOutline({ color: e.target.value })}
                  className="w-10 h-10 rounded-lg cursor-pointer border-2 border-border"
                />
                <span className="text-sm text-muted-foreground font-mono">
                  {design.textOutline?.color || '#000000'}
                </span>
              </div>
            </div>

            {/* Outline Width */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-muted-foreground">Outline Width</label>
                <span className="text-xs text-muted-foreground">{design.textOutline?.width ?? 1}px</span>
              </div>
              <Slider
                value={[design.textOutline?.width ?? 1]}
                onValueChange={([value]) => updateOutline({ width: value })}
                min={0.5}
                max={5}
                step={0.5}
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TextEffects;
