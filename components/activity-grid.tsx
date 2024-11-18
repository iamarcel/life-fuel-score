'use client';

import { useState } from 'react';
import { ActivityCard } from './activity-card';
import { activitiesWithScores } from '@/lib/data';
import { Input } from './ui/input';

export function ActivityGrid() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredActivities = activitiesWithScores.filter(activity => 
    activity.name.toLowerCase().includes(search.toLowerCase()) &&
    (!selectedCategory || activity.category === selectedCategory)
  );

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <Input
          type="search"
          placeholder="Search activities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}