'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { ActivityCard } from './activity-card';
import { activitiesWithScores } from '@/lib/data';

export function ActivitySearch() {
  const [search, setSearch] = useState('');

  const filteredActivities = activitiesWithScores.filter(activity => 
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl font-bold">Explore Activities</h2>
        <div className="w-full max-w-md">
          <Input
            type="search"
            placeholder="Search activities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.slice(0, 6).map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}