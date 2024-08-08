import { useEffect, useRef } from 'react';
import useData from '../hooks/useData';
import DataCard from './DataCard';
import { Character } from './types/types';

function DataList() {
  const { isLoading, data, fetchNextPage, hasNextPage } = useData();
  const loadingTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasNextPage && entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold: 1,
      }
    );
    if (loadingTarget.current) {
      observer.observe(loadingTarget.current);
    }
    return () => {
      if (loadingTarget.current) {
        observer.unobserve(loadingTarget.current);
      }
    };
  }, [loadingTarget, hasNextPage, fetchNextPage]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {isLoading && (
        <div className="mx-auto w-12 h-12 border-8 border-blue-700 rounded-full border-t-transparent animate-spin"></div>
      )}
      {data?.map((item: Character) => (
        <DataCard item={item} key={item.id} />
      ))}
      <div ref={loadingTarget}></div>
    </div>
  );
}

export default DataList;
