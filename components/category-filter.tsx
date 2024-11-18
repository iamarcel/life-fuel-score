'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { activitiesWithScores } from '@/lib/data';

export function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(activitiesWithScores.map((activity) => activity.category))
  );

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        className="rounded-full"
        onClick={() => setSelectedCategory(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          className="rounded-full"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}