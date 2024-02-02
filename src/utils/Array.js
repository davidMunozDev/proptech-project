import { SORT_STRATEGIES } from '@/config'
import { validateParamsTypes } from '@/utils/validation'

export const range = (start, end) => 
  (typeof start && typeof end) === 'number' ? Array(end - start + 1).fill().map((_, index) => start + index) : [];

export const sortByStrategy = ( array, selectedSort = {} ) => {
  validateParamsTypes([{value: array, type: 'array'}, {value: selectedSort, type: 'object'}])

  const {key, strategy, value} = selectedSort
  const { group, singleAscendant, singleDescendant } = SORT_STRATEGIES

  const sortFunctions = {
    [singleAscendant]: (data, { key }) => key ? data.sort((a, b) => a[key] - b[key]) : array,
    [singleDescendant]: (data, { key }) => key ? data.sort((a, b) => b[key] - a[key]) : array,
    [group]: (data, {key, value}) => key && value ? data.sort((a, b) =>  a[key] == value ? -1 : b[key] == value ? 1 : 0) : array
  }

  return SORT_STRATEGIES[strategy] && array.length > 0 ? sortFunctions[strategy](array, {key, value}) : array
}