import { describe, expect, it } from 'vitest'

import { validateParamsTypes } from '@/utils/validation'
const errorMessage = 'Invalid parameters'

describe('validateParamsTypes()', () => {
  it('should throw an error with message (Invalid parameters) if invalid array of parameters are provided', () => {
    const input = [{type: 'string', value: null}, {type: 'object', value: ''}, {type: 'array', value: {}}]

    const resultFn = () => {validateParamsTypes(input)}

    expect(resultFn).toThrow(errorMessage)
  })

  it('should throw an error with message (Invalid parameters) if param with type object and value is an array', () => {
    const input = [{type: 'object', value: []}]

    const resultFn = () => {validateParamsTypes(input)}

    expect(resultFn).toThrow(errorMessage)
  })

  it('should not throw an error if valid array of parameters are provided', () => {
    const input = [{type: 'string', value: ''}, {type: 'object', value: {}}]

    const resultFn = () => {validateParamsTypes(input)}

    expect(resultFn).not.toThrow()
  })
})