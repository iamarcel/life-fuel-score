import { Brain, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center space-x-2 mb-6">
          <Brain className="h-12 w-12 text-primary" />
          <Heart className="h-12 w-12 text-primary" />
          <Zap className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Life Fuel Score
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Evaluate and rate activities based on their impact on human well-being.
          Make informed choices about your daily activities and build a healthier
          relationship with dopamine.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/activities">
            <Button size="lg">Browse Activities</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}