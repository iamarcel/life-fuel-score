import Link from 'next/link';
import { Brain } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Life Fuel Score
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/activities"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Activities
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Research
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}