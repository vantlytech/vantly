'use client';

import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header
      className={cn(
        'relative bg-gradient-mesh py-12 lg:py-16',
        className
      )}
      aria-labelledby="page-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="page-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}