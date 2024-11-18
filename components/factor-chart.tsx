'use client';

import { Progress } from '@/components/ui/progress';
import { ActivityFactors } from '@/lib/types';

interface FactorChartProps {
  factors: ActivityFactors;
}

export function FactorChart({ factors }: FactorChartProps) {
  const data = [
    {
      name: 'Dopamine',
      value: factors.dri,
    },
    {
      name: 'Sustainability',
      value: factors.sf,
    },
    {
      name: 'Social',
      value: factors.si,
    },
    {
      name: 'Health',
      value: factors.hi,
    },
  ];

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.name} className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span>{item.name}</span>
            <span className="text-muted-foreground">{item.value}/10</span>
          </div>
          <Progress value={item.value * 10} />
        </div>
      ))}
    </div>
  );
}