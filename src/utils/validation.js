export function validateParamsTypes(params = []) {
  const areParamsValid = params.every(param => {
    const { type, value } = param
    if(type === 'array') return Array.isArray(value)
    if(type === 'object') return !Array.isArray(value) &&  typeof value === type

    return typeof value === type
  })

  if(!areParamsValid) {
    throw new Error('Invalid parameters') // this could be in error manager function
  }
}