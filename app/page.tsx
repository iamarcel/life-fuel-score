import { ActivitySearch } from '@/components/activity-search';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <ActivitySearch />
    </div>
  );
}