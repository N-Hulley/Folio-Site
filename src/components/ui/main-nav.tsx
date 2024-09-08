'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { MobileNav } from './mobile-nav';
import { docsConfig } from '@/config/docs';
import { Button } from './button';
export function MainNav() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="hidden md:inline">
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {docsConfig.mainNav?.map(
            (item) =>
              item.href && (
                <Link
                  to={item.href}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                  )}>
                  {item.title}
                </Link>
              )
          )}
        </nav>
      </div>
      <MobileNav />

      <div className="flex items-center justify-between space-x-2 ">
        <nav className="flex items-center gap-2">
          <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 ">
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </div>
  );
}
