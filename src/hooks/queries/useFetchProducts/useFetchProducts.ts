import { useEffect, useContext } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../api/product';
import { ToastContext } from '../../../context/ToastProvider';
import { Option } from '../../../types/Option.type';
import { SIZE } from '../../../constants/api';
import { QUERY_KEYS } from '../../../constants/queryKeys';

const useFetchProducts = (category: Option, sort: Option) => {
  const { showToast } = useContext(ToastContext);

  const { data, isFetching, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, category, sort],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => fetchProducts(category.key, pageParam, SIZE.ADDITIONAL, sort.key),
    getNextPageParam: (lastPage, allPages) => (lastPage.isLast ? undefined : allPages.length),
    retry: false,
  });

  useEffect(() => {
    if (error) showToast(error.message);
  }, [error]);

  return {
    products: data?.pages.flatMap((page) => page.data) ?? [],
    isFetching,
    error,
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useFetchProducts;
