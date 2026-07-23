import { useEffect, useState } from 'react';

/**
 * Hook to defer heavy animations until after initial paint
 * Prevents animation overhead from blocking initial render
 */
export function useDeferredAnimation() {
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise use timeout
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = requestIdleCallback(() => {
        setIsAnimationReady(true);
      }, { timeout: 1000 });
      return () => cancelIdleCallback(id);
    } else {
      const timeoutId = setTimeout(() => {
        setIsAnimationReady(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return isAnimationReady;
}
