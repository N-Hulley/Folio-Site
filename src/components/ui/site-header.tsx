import { MainNav } from './main-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-screen-2xl items-center py-4 px-4 ">
        <MainNav />
      </div>
    </header>
  );
}
