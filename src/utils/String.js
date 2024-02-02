export const getAttributeFromString = (string, attribute) => {
  if((typeof string && typeof attribute) !== 'string') return ''

  const regex = new RegExp(`${attribute}\=\"([A-Za-z0-9 _]*)\"`)
  const [, match = ''] = string.match(regex) || []

  return match
}

export const getParamFromUrl = (url, param) => {
  if((typeof url && typeof param) !== 'string') return null

  const urlObject = new URL(url);

  return urlObject.searchParams.get(param)
}