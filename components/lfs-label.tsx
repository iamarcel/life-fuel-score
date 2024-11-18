'use client';

import { cn } from '@/lib/utils';

interface LFSLabelProps {
  score: number;
}

// Calculate fill percentages for each section based on score
const getFillLevels = (score: number) => {
  if (score >= 70) {
    return {
      top: 0.2,    // Dim red section
      middle: 0.2, // Dim yellow section
      bottom: 1,   // Full green section
    };
  } else if (score >= 40) {
    return {
      top: 0.2,    // Dim red section
      middle: 1,   // Full yellow section
      bottom: 0.2, // Dim green section
    };
  } else {
    return {
      top: 1,      // Full red section
      middle: 0.2, // Dim yellow section
      bottom: 0.2, // Dim green section
    };
  }
};

export function LFSLabel({ score }: LFSLabelProps) {
  const fillLevels = getFillLevels(score);

  return (
    <div className="relative w-full max-w-[200px] mx-auto aspect-[3/4]">
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Bottom Section (Green) */}
        <path
          d="M0 80 L16.6667 53.3333 L83.3333 53.3333 L100 80 Z"
          fill={`rgba(34, 197, 94, ${fillLevels.bottom})`}
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Middle Section (Yellow) */}
        <path
          d="M16.6667 53.3333 L33.3333 26.6667 L66.6667 26.6667 L83.3333 53.3333 Z"
          fill={`rgba(234, 179, 8, ${fillLevels.middle})`}
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Top Section (Red) */}
        <path
          d="M33.3333 26.6667 L50 0 L66.6667 26.6667 Z"
          fill={`rgba(239, 68, 68, ${fillLevels.top})`}
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Section Divider Lines */}
        <line
          x1="33.3333"
          y1="26.6667"
          x2="66.6667"
          y2="26.6667"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <line
          x1="16.6667"
          y1="53.3333"
          x2="83.3333"
          y2="53.3333"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Score Label */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 text-center font-bold',
          score >= 70
            ? 'text-green-600'
            : score >= 40
            ? 'text-yellow-600'
            : 'text-red-600'
        )}
      >
        LFS {score}
      </div>
    </div>
  );
}
