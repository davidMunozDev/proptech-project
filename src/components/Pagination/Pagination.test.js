import { describe, expect, it } from 'vitest'
import { processPaginationConfig } from '@/components/Pagination/Pagination.utils'


describe('processPaginationConfig()', () => {
  it('should return config object if a string with urls and rels is provided', () => {
    const input = '<http://exampleurl/mock?_page=1&_limit=4>; rel="first", <http://exampleurl/mock?_page=2&_limit=4>; rel="next", <http://exampleurl/mock?_page=4&_limit=4>; rel="last"'

    const result = processPaginationConfig(input)
    const expectedResult = {first: 1, next: 2, pages: [1, 2, 3, 4]}
  
    expect(result).toEqual(expectedResult)
  })
  it('should return config object with one attr if a string with only one step is provided', () => {
    const input = '<http://exampleurl/mock?_page=1&_limit=4>; rel="first"'

    const result = processPaginationConfig(input)
    const expectedResult = {first: 1}
  
    expect(result).toEqual(expectedResult)
  })
  it('should return config object with pages if only "last" rel is provided', () => {
    const input = '<http://exampleurl/mock?_page=4&_limit=4>; rel="last"'

    const result = processPaginationConfig(input)
    const expectedResult = {pages: [1, 2, 3, 4]}
  
    expect(result).toEqual(expectedResult)
  })
  it('should return empty object if incorrect input is provided', () => {
    const result = processPaginationConfig()
    const result2 = processPaginationConfig(null)
    const result3 = processPaginationConfig([])
  
    expect(result).toEqual({})
    expect(result2).toEqual({})
    expect(result3).toEqual({})
  })
})