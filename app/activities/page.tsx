import { ActivityGrid } from '@/components/activity-grid';
import { CategoryFilter } from '@/components/category-filter';

export default function Activities() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Activity Library</h1>
        <p className="text-xl text-muted-foreground">
          Explore and understand the impact of different activities on your well-being
        </p>
      </div>
      <CategoryFilter />
      <ActivityGrid />
    </div>
  );
}