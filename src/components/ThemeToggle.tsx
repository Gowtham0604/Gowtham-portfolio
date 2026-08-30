'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-white/[0.08] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2 rounded-full bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.14] border border-black/[0.08] dark:border-white/[0.1] text-foreground transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-amber-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
