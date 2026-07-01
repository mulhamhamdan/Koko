import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, History } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImg,
  afterImg,
  beforeLabel = "Original / Survey",
  afterLabel = "Proposed Revitalization"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 select-none cursor-ew-resize"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full bg-[#111]">
        <img 
          src={beforeImg} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/10">
          <History className="w-3.5 h-3.5" />
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Overlay, clipped based on sliderPosition) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* We keep this image full width, parent width restricts it */}
        <div className="absolute inset-0 h-full w-[100vw] max-w-none" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
          <img 
            src={afterImg} 
            alt="After" 
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width, height: containerRef.current?.getBoundingClientRect().height }}
          />
        </div>
        <div className="absolute bottom-4 left-4 bg-brand-terracotta/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/10 whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          {afterLabel}
        </div>
      </div>

      {/* Slider Line Divider */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 flex items-center justify-center transition-all duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="w-10 h-10 rounded-full bg-white dark:bg-brand-charcoal text-brand-terracotta dark:text-brand-pink shadow-lg border border-black/10 dark:border-white/20 flex items-center justify-center font-bold text-lg select-none">
          ↔
        </div>
      </div>
    </div>
  );
};
