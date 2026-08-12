import { useEffect, useState } from 'react';

/**
 * Hook for optimized image preloading
 * Preloads images asynchronously to avoid blocking initial render
 */
export function useImagePreload(imageUrls: string[]) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    // Load first image immediately (hero)
    if (imageUrls[0]) {
      const img = new Image();
      img.src = imageUrls[0];
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, imageUrls[0]]));
      };
    }

    // Preload remaining images after initial render completes
    const timeoutId = setTimeout(() => {
      imageUrls.forEach((url, index) => {
        if (index === 0) return; // Skip first, already loaded
        
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, url]));
        };
        img.onerror = () => {
          setLoadedImages(prev => new Set([...prev, url])); // Mark as processed even if failed
        };
      });
      setIsLoading(false);
    }, 100); // Small delay to let initial render complete

    return () => clearTimeout(timeoutId);
  }, [imageUrls]);

  const isImageLoaded = (url: string) => loadedImages.has(url);

  return { isImageLoaded, isLoading, loadedImages };
}
