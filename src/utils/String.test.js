import { describe, expect, it } from 'vitest'
import { getAttributeFromString, getParamFromUrl } from '@/utils/String'

describe('getAttributeFromString()', () => {
  it('should return a the attribute value if string with attr and attr wanted are provided', () => {
    const string = 'string with attribute attr="value"'
    const attribute = 'attr'

    const result = getAttributeFromString(string, attribute)
    const expectedResult = 'value'

    expect(result).toBe(expectedResult)
  })

  it('should return an empty string if string without attr and attr wanted are provided', () => {
    const string = 'string without attribute'
    const attribute = 'attr'

    const result = getAttributeFromString(string, attribute)
    const expectedResult = ''

    expect(result).toBe(expectedResult)
  })

  it('should return empty string if params are not strings', () => {
    const string = null
    const attribute = 0

    const result = getAttributeFromString(string, attribute)
    const expectedResult = ''

    expect(result).toBe(expectedResult)
  })
})

describe('getParamFromUrl()', () => {
  it('should return param value a if param and url are provided', () => {
    const url = 'http://exampleurl/mock?param=value&_limit=4'
    const param = 'param'

    const result = getParamFromUrl(url, param)
    const expectedResult = 'value'

    expect(result).toBe(expectedResult)
  })

  it('should return an null if url without params and param wanted are provided', () => {
    const url = 'http://exampleurl/mock'
    const param = 'param'

    const result = getParamFromUrl(url, param)
    const expectedResult = null

    expect(result).toBe(expectedResult)
  })

  it('should return null if params are not strings', () => {
    const url = 5
    const param = {}

    const result = getParamFromUrl(url, param)
    const expectedResult = null

    expect(result).toBe(expectedResult)
  })
})