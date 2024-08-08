import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

function useData() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['char'],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const url = 'https://rickandmortyapi.com/api/character';
      const result = await axios.get(url, { params: { page: pageParam } });
      return result.data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        const nextPage = new URL(lastPage.info.next).searchParams.get('page');
        return nextPage ? parseInt(nextPage) : null;
      } else {
        return null;
      }
    },
    select: (result) => {
      return result.pages.flatMap((page) => page.results);
    },
  });

  return { data, isLoading, fetchNextPage, hasNextPage };
}

export default useData;
