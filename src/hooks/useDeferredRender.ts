import { useEffect, useState } from 'react';

/**
 * Hook to defer rendering of non-critical sections
 * Renders true after initial paint to avoid blocking homepage
 */
export function useDeferredRender(delayMs: number = 300) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return shouldRender;
}
