import { CalligraphyDesign, FONT_OPTIONS } from '@/types/calligraphy';
import { X, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface SavedDesignsModalProps {
  isOpen: boolean;
  onClose: () => void;
  designs: CalligraphyDesign[];
  onLoad: (design: CalligraphyDesign) => void;
  onDelete: (id: string) => void;
}

const SavedDesignsModal = ({ isOpen, onClose, designs, onLoad, onDelete }: SavedDesignsModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-2xl shadow-elevated w-full max-w-2xl max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-display font-semibold text-foreground">
              Saved Designs
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {designs.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg">No saved designs yet</p>
                <p className="text-sm mt-2">Create and save your first design!</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {designs.map((design) => {
                  const fontOption = FONT_OPTIONS.find(f => f.name === design.fontFamily);
                  return (
                    <motion.div
                      key={design.id}
                      whileHover={{ scale: 1.01 }}
                      className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-200 cursor-pointer"
                      onClick={() => {
                        onLoad(design);
                        onClose();
                      }}
                    >
                      <div
                        className="p-6 min-h-[100px] flex items-center justify-center"
                        style={{ backgroundColor: design.backgroundColor }}
                      >
                        <p
                          className={`${fontOption?.className || 'font-serif'} truncate max-w-full`}
                          style={{
                            color: design.textColor,
                            fontSize: `${Math.min(design.fontSize, 32)}px`,
                            textAlign: design.textAlign,
                          }}
                        >
                          {design.text.substring(0, 50) || 'Empty design'}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-card to-transparent">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground font-medium">
                            {design.name || 'Untitled'}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDelete(design.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SavedDesignsModal;
