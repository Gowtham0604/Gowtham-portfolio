'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-border bg-card/60 flex items-center justify-center text-muted-foreground">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative p-2 rounded-lg border border-border bg-card/70 hover:bg-muted text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 cursor-pointer"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-emerald-400 hover:text-emerald-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 hover:text-slate-900 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
