import { useRef, useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { CalligraphyDesign, COLOR_PRESETS, BACKGROUND_PRESETS } from '@/types/calligraphy';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import CalligraphyCanvas from './CalligraphyCanvas';
import FontSelector from './FontSelector';
import ColorPicker from './ColorPicker';
import TextControls from './TextControls';
import TextEffects from './TextEffects';
import ActionBar from './ActionBar';
import SavedDesignsModal from './SavedDesignsModal';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const DEFAULT_DESIGN: CalligraphyDesign = {
  id: crypto.randomUUID(),
  text: 'Beautiful Calligraphy',
  fontFamily: 'Great Vibes',
  fontSize: 56,
  textColor: '#1a1a1a',
  backgroundColor: '#faf8f5',
  textAlign: 'center',
  letterSpacing: 2,
  lineHeight: 1.4,
  createdAt: Date.now(),
  name: '',
  textShadow: {
    enabled: false,
    offsetX: 2,
    offsetY: 2,
    blur: 4,
    color: '#00000080',
  },
  textOutline: {
    enabled: false,
    width: 1,
    color: '#000000',
  },
};

const CalligraphyEditor = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [design, setDesign] = useState<CalligraphyDesign>(DEFAULT_DESIGN);
  const [savedDesigns, setSavedDesigns] = useLocalStorage<CalligraphyDesign[]>('calligraphy-designs', []);
  const [showSavedModal, setShowSavedModal] = useState(false);

  const updateDesign = useCallback((updates: Partial<CalligraphyDesign>) => {
    setDesign(prev => ({ ...prev, ...updates }));
  }, []);

  const handleDownload = useCallback(async () => {
    if (!canvasRef.current) return;

    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement('a');
      link.download = `calligraphy-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      toast.success('Image downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download image');
    }
  }, []);

  const handleCopy = useCallback(async () => {
    if (!canvasRef.current) return;

    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob }),
          ]);
          toast.success('Image copied to clipboard!');
        }
      }, 'image/png');
    } catch (error) {
      console.error('Copy error:', error);
      toast.error('Failed to copy image');
    }
  }, []);

  const handleSave = useCallback(() => {
    const name = prompt('Enter a name for this design:', design.name || 'My Design');
    if (name === null) return;

    const newDesign: CalligraphyDesign = {
      ...design,
      id: crypto.randomUUID(),
      name: name || 'Untitled',
      createdAt: Date.now(),
    };

    setSavedDesigns(prev => [newDesign, ...prev]);
    toast.success('Design saved!');
  }, [design, setSavedDesigns]);

  const handleLoadDesign = useCallback((loadedDesign: CalligraphyDesign) => {
    setDesign(loadedDesign);
    toast.success('Design loaded!');
  }, []);

  const handleDeleteSaved = useCallback((id: string) => {
    setSavedDesigns(prev => prev.filter(d => d.id !== id));
    toast.success('Design deleted');
  }, [setSavedDesigns]);

  const handleClear = useCallback(() => {
    setDesign({
      ...DEFAULT_DESIGN,
      id: crypto.randomUUID(),
    });
    toast.success('Canvas cleared');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border bg-toolbar/50 backdrop-blur-sm sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground tracking-tight">
              Calligraphy Studio
            </h1>
            <p className="text-muted-foreground mt-1 font-serif">
              Create beautiful typographic art
            </p>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          {/* Canvas Area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <CalligraphyCanvas ref={canvasRef} design={design} />
            <ActionBar
              onDownload={handleDownload}
              onCopy={handleCopy}
              onSave={handleSave}
              onLoadSaved={() => setShowSavedModal(true)}
              onClear={handleClear}
              hasSavedDesigns={savedDesigns.length > 0}
            />
          </motion.div>

          {/* Controls Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="toolbar-panel p-6 space-y-6">
              <TextControls design={design} onChange={updateDesign} />
            </div>

            <div className="toolbar-panel p-6 space-y-6">
              <FontSelector
                selectedFont={design.fontFamily}
                onSelect={(fontFamily) => updateDesign({ fontFamily })}
              />
            </div>

            <div className="toolbar-panel p-6 space-y-6">
              <ColorPicker
                label="Text Color"
                value={design.textColor}
                presets={COLOR_PRESETS}
                onChange={(textColor) => updateDesign({ textColor })}
              />

              <div className="h-px bg-border" />

              <ColorPicker
                label="Background"
                value={design.backgroundColor}
                presets={BACKGROUND_PRESETS}
                onChange={(backgroundColor) => updateDesign({ backgroundColor })}
              />
            </div>

            <div className="toolbar-panel p-6 space-y-6">
              <TextEffects design={design} onChange={updateDesign} />
            </div>
          </motion.aside>
        </div>
      </main>

      {/* Saved Designs Modal */}
      <SavedDesignsModal
        isOpen={showSavedModal}
        onClose={() => setShowSavedModal(false)}
        designs={savedDesigns}
        onLoad={handleLoadDesign}
        onDelete={handleDeleteSaved}
      />
    </div>
  );
};

export default CalligraphyEditor;
