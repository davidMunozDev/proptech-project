import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';

export function useSorters () {
  const [state, dispatch] = useContext(GlobalContext);
  const {selectedSort} = state
  const setSort = (sort) => {
    dispatch({
      type: 'SET_SORT',
      payload: sort,
    });
  }
  return {
    selectedSort,
    setSort,
  }
}