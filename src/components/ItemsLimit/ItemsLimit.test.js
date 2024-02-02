import { describe, expect, it } from 'vitest'

import { getLimits } from '@/components/ItemsLimit/ItemsLimit.utils'

describe('getLimits()', () => {
  it('should return array of limits if total items and items in page are provided', () => {
    const total = 15
    const pageItems = 6

    const result = getLimits(total, pageItems)
    const expectedResult = [{name: '6', value: 6}, {name: '12', value: 12}, {name: 'All', value: 15}]
  
    expect(result).toEqual(expectedResult)
  })

  it('should throw an error if incorrect params provided', () => {
    const total = 15
    const pageItems = ''

    const resultFn = () => { getLimits(total, pageItems) }
  
    expect(resultFn).toThrowError
  })
})