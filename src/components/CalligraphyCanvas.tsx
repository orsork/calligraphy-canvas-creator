import { forwardRef } from 'react';
import { CalligraphyDesign, FONT_OPTIONS } from '@/types/calligraphy';
import { motion } from 'framer-motion';

interface CalligraphyCanvasProps {
  design: CalligraphyDesign;
}

const CalligraphyCanvas = forwardRef<HTMLDivElement, CalligraphyCanvasProps>(
  ({ design }, ref) => {
    const fontOption = FONT_OPTIONS.find(f => f.name === design.fontFamily);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-4xl mx-auto"
      >
        <div
          ref={ref}
          className="canvas-container relative overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: design.backgroundColor,
            minHeight: '400px',
            aspectRatio: '4/3',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
            <p
              className="whitespace-pre-wrap break-words w-full transition-all duration-200"
              style={{
                fontFamily: fontOption ? `'${fontOption.name}', cursive` : 'serif',
                color: design.textColor,
                fontSize: `${design.fontSize}px`,
                textAlign: design.textAlign,
                letterSpacing: `${design.letterSpacing}px`,
                lineHeight: design.lineHeight,
                textShadow: design.textShadow?.enabled
                  ? `${design.textShadow.offsetX}px ${design.textShadow.offsetY}px ${design.textShadow.blur}px ${design.textShadow.color}`
                  : 'none',
                WebkitTextStroke: design.textOutline?.enabled
                  ? `${design.textOutline.width}px ${design.textOutline.color}`
                  : 'none',
              }}
            >
              {design.text || 'Your beautiful text here...'}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
);

CalligraphyCanvas.displayName = 'CalligraphyCanvas';

export default CalligraphyCanvas;
