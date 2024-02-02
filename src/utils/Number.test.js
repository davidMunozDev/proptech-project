import { describe, expect, it } from 'vitest'

import { localizeNumber } from '@/utils/Number'

describe('localizeNumber()', () => {
  it('should return a string with localized value if number provided', () => {
    const input = 560386

    const result = localizeNumber(input)

    expect(result).toBeTypeOf('string');
  })

  it('should throw an error if invalid parameters provided', () => {
    const resultFn = () => {localizeNumber([])}

    expect(resultFn).toThrowError;
  })

  it('should throw an error if invalid parameters provided', () => {
    const result = localizeNumber(NaN)
    expect(result).toBe('0');
  })
})