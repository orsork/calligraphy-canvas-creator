import { Download, Copy, Save, FolderOpen, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ActionBarProps {
  onDownload: () => void;
  onCopy: () => void;
  onSave: () => void;
  onLoadSaved: () => void;
  onClear: () => void;
  hasSavedDesigns: boolean;
}

const ActionBar = ({ onDownload, onCopy, onSave, onLoadSaved, onClear, hasSavedDesigns }: ActionBarProps) => {
  const actions = [
    { icon: Download, label: 'Download', onClick: onDownload, variant: 'default' as const },
    { icon: Copy, label: 'Copy', onClick: onCopy, variant: 'secondary' as const },
    { icon: Save, label: 'Save', onClick: onSave, variant: 'secondary' as const },
    { icon: FolderOpen, label: 'Load', onClick: onLoadSaved, variant: 'secondary' as const, disabled: !hasSavedDesigns },
    { icon: Trash2, label: 'Clear', onClick: onClear, variant: 'outline' as const },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex flex-wrap gap-3 justify-center"
    >
      {actions.map(({ icon: Icon, label, onClick, variant, disabled }) => (
        <Button
          key={label}
          variant={variant}
          onClick={onClick}
          disabled={disabled}
          className="gap-2 px-6 py-5 text-base font-medium"
        >
          <Icon className="w-5 h-5" />
          {label}
        </Button>
      ))}
    </motion.div>
  );
};

export default ActionBar;
