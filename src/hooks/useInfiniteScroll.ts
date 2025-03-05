// useInfiniteScroll.ts
import { useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  threshold?: number;
}

const useInfiniteScroll = ({ hasNextPage, fetchNextPage, threshold = 0.3 }: UseInfiniteScrollProps) => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold },
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.current.observe(currentRef);
    }

    return () => {
      if (observer.current && currentRef) {
        observer.current.unobserve(currentRef);
      }
    };
  }, [hasNextPage, fetchNextPage, threshold]);

  return loadMoreRef;
};

export default useInfiniteScroll;
