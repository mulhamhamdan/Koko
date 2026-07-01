import React, { useState } from 'react';
import { RotateCw, Info } from 'lucide-react';

export const TowerRotation: React.FC = () => {
  const [rotation, setRotation] = useState(45); // default rotation matching their logo

  // Text descriptions based on the angle
  const getStageDescription = (deg: number) => {
    if (deg >= 0 && deg < 30) {
      return {
        title: "The Monolith (0°)",
        concept: "The original vertical silhouette of the historic Fardoss Hotel tower—static, monumental, and rooted in the past.",
        badge: "Legacy"
      };
    } else if (deg >= 30 && deg < 75) {
      return {
        title: "The Spacial Shift (45°)",
        concept: "Rotating the tower reveals new structural overlaps, symbolizing individual creative spaces starting to connect.",
        badge: "Connection"
      };
    } else if (deg >= 75 && deg < 135) {
      return {
        title: "The Rotated Horizon (90°)",
        concept: "A horizontal transformation. The tower silhouette now looks like an open window or a bridge, representing adaptation.",
        badge: "Transformation"
      };
    } else {
      return {
        title: "Fardoss Community (135°+)",
        concept: "A rotated silhouette. Spacing and forms collaborate to represent a community that honors history but looks forward.",
        badge: "Evolution"
      };
    }
  };

  const stage = getStageDescription(rotation);

  return (
    <div className="bg-[#181922] text-white p-6 rounded-2xl border border-white/5 shadow-2xl flex flex-col md:flex-row gap-8 items-center max-w-2xl mx-auto my-8">
      {/* Visual Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="relative w-48 h-48 rounded-full border border-dashed border-white/20 flex items-center justify-center bg-[#13141c]">
          
          {/* Rotating Tower Group */}
          <div 
            className="w-32 h-32 flex items-center justify-center transition-transform duration-300 ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* SVG Brutalist Tower Silhouette */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-pink fill-current drop-shadow-[0_0_12px_rgba(233,157,143,0.3)]">
              {/* Distinctive silhouette of Fardoss Hotel tower: stepped slabs, central column */}
              <rect x="42" y="10" width="16" height="80" rx="2" />
              <rect x="25" y="25" width="50" height="8" rx="1" />
              <rect x="25" y="40" width="50" height="8" rx="1" />
              <rect x="25" y="55" width="50" height="8" rx="1" />
              <rect x="30" y="70" width="40" height="8" rx="1" />
              {/* Stepped top block */}
              <polygon points="35,10 65,10 60,2 40,2" />
            </svg>
          </div>

          {/* Compass grid markers */}
          <div className="absolute top-2 text-[9px] text-gray-500 uppercase tracking-widest">0°</div>
          <div className="absolute right-2 text-[9px] text-gray-500 uppercase tracking-widest">90°</div>
          <div className="absolute bottom-2 text-[9px] text-gray-500 uppercase tracking-widest">180°</div>
          <div className="absolute left-2 text-[9px] text-gray-500 uppercase tracking-widest">270°</div>
        </div>

        {/* Rotation Slider Control */}
        <div className="w-full mt-6 flex items-center gap-3">
          <RotateCw className="w-4 h-4 text-brand-pink shrink-0 animate-spin-slow" />
          <input 
            type="range" 
            min="0" 
            max="180" 
            value={rotation} 
            onChange={(e) => setRotation(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-pink"
          />
          <span className="text-xs font-mono w-10 text-right text-brand-pink font-semibold">{rotation}°</span>
        </div>
      </div>

      {/* Narrative Card */}
      <div className="flex-1 flex flex-col justify-between self-stretch">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded bg-brand-pink/20 text-brand-pink text-[10px] uppercase font-bold tracking-widest">
              {stage.badge}
            </span>
            <span className="text-gray-500 text-xs">Concept Demonstration</span>
          </div>
          
          <h4 className="text-xl font-serif text-white mb-3">
            {stage.title}
          </h4>
          
          <p className="text-sm text-gray-400 leading-relaxed font-sans min-h-[80px]">
            {stage.concept}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-2 text-xs text-gray-500">
          <Info className="w-4 h-4 shrink-0 text-brand-pink" />
          <span>Drag the dial slider to see how rotating the Fardoss brutalist tower reveals the branding logo identity.</span>
        </div>
      </div>
    </div>
  );
};
