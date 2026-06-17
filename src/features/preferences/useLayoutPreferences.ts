import { useCallback, useEffect, useState } from "react";
import { defaultLayoutPreferences, type LayoutPreferences } from "./layout-types";

const storageKey = "stealth-layout-preferences";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function clampPreferences(prefs: LayoutPreferences): LayoutPreferences {
  return {
    ...prefs,
    sidebarWidth: clamp(prefs.sidebarWidth, 5, 40),
    listWidth: clamp(prefs.listWidth, 10, 60),
    readerWidth: clamp(prefs.readerWidth, 15, 80),
  };
}

function isSameLayout(a: LayoutPreferences, b: LayoutPreferences) {
  return (Object.keys(defaultLayoutPreferences) as Array<keyof LayoutPreferences>).every((key) =>
    Object.is(a[key], b[key]),
  );
}

export function useLayoutPreferences() {
  const [layout, setLayout] = useState<LayoutPreferences>(defaultLayoutPreferences);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setLayout(clampPreferences({ ...defaultLayoutPreferences, ...parsed }));
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(layout));
  }, [hydrated, layout]);

  const setLayoutPreference = useCallback((patch: Partial<LayoutPreferences>) => {
    setLayout((prev: LayoutPreferences) => {
      const next = clampPreferences({ ...prev, ...patch });
      return isSameLayout(prev, next) ? prev : next;
    });
  }, []);

  const resetLayout = useCallback(() => {
    setLayout((prev) =>
      isSameLayout(prev, defaultLayoutPreferences) ? prev : defaultLayoutPreferences,
    );
  }, []);

  return { layout, setLayout: setLayoutPreference, resetLayout, hydrated };
}
