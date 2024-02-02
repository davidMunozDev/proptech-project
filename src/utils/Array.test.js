import { describe, expect, it } from 'vitest'
import { range, sortByStrategy } from '@/utils/Array'

import { SORT_STRATEGIES } from '@/config'

const { singleDescendant, singleAscendant, group } = SORT_STRATEGIES

describe('range()', () => {
  it('should return an array of consecutive numbers if start and end numbers are provided', () => {
    const result = range(1, 4)
    const expectedResult = [1, 2, 3, 4]

    expect(result).toEqual(expectedResult)
  })

  it('should return an empty array if start or end are not numbers', () => {
    const result = range(0)
    const result2 = range('1', {})
    const expectedResult = []

    expect(result).toEqual(expectedResult)
    expect(result2).toEqual(expectedResult)
  })
})

describe('sortByStrategy()', () => {
  it('should return ordered array by object key if array and singleAscendant strategy are provided', () => {
    const selectedSort = {
      key: 'key',
      strategy: singleAscendant,
    }
    const array = [{key: 3}, {key: 1}, {key: 2}]

    const result = sortByStrategy(array, selectedSort)
    const expectedResult = [{key: 1}, {key: 2}, {key: 3}]

    expect(result).toEqual(expectedResult)
  })

  it('should return ordered array by object key if array and singleAscendant strategy are provided', () => {
    const selectedSort = {
      key: 'key',
      strategy: singleDescendant,
    }
    const array = [{key: 3}, {key: 1}, {key: 2}]

    const result = sortByStrategy(array, selectedSort)
    const expectedResult = [{key: 3}, {key: 2}, {key: 1}]

    expect(result).toEqual(expectedResult)
  })

  it('should return array with group items with the selected value on the top if array and group strategy are provided', () => {
    const selectedSort = {
      key: 'key',
      strategy: group,
      value: 3,
    }
    const array = [{key: 1}, {key: 3}, {key: 2}, {key: 3}]

    const result = sortByStrategy(array, selectedSort)
    const expectedResult = [{key: 3}, {key: 3}, {key: 1}, {key: 2}]

    expect(result).toEqual(expectedResult)
  })
  
  it('should return the array given if wrong str provided', () => {
    const selectedSort = {
      key: 'key',
      strategy: 'worong strategy',
    }
    const array = [{key: 1}]

    const result = sortByStrategy(array, selectedSort)
    const expectedResult = array

    expect(result).toEqual(expectedResult)
  })

  it('should return an empty array if any key or value provided', () => {
    const selectedSort = {
      strategy: group,
    }
    const array = [{key: 1}, {key: 2}]

    const result = sortByStrategy(array, selectedSort)
    const expectedResult = array

    expect(result).toEqual(expectedResult)
  })

  it('should return the array given if one item in the array provided', () => {
    const selectedSort = {
      key: 'key',
      strategy: singleAscendant,
    }
    const array = [{key: 1}]

    const result = sortByStrategy(array, selectedSort)
    const expectedResult = array

    expect(result).toEqual(expectedResult)
  })

  it('should throw an error if invalid parameters provided', () => {
    const resultFn = () => {sortByStrategy({}, undefined)}

    expect(resultFn).toThrowError;
  })
})