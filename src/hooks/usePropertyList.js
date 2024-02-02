import useSWR from 'swr';

export function usePropertyList ({ currentPage, limit}) {
  const { data: {response, headers} = {}, error, isValidating } = useSWR(`/competitors?_page=${currentPage}&_limit=${limit}`);
  
  const totalItems = headers && +headers.get('x-total-count')
  const apiPagination = headers ? headers.get('Link') : ''
  
  return {
    response,
    apiPagination,
    totalItems,
    error,
    isEmpty: !response && !isValidating,
    isLoading: !error && isValidating
  }
}