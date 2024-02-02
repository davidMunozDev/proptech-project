import { range } from '@/utils/Array.js'
import { getAttributeFromString, getParamFromUrl } from '@/utils/String.js'

const getLinkParameters = (link) => {
  const[url, rel] = link.split(';')
  const cleanedUrl = url.replace(/[< >]/g, '')

  return {
    pageNumber: getParamFromUrl(cleanedUrl, '_page'),
    name: getAttributeFromString(rel, 'rel')
  }
}

export const processPaginationConfig = (linkHeader) => {
  if(!linkHeader || (typeof linkHeader !== 'string')) return {}
  
  return linkHeader
   .split(',')
     .reduce((config, step) => {
      const {pageNumber, name} = getLinkParameters(step)
       
       if(name === 'last') {
         return { ...config, pages: range(1, +pageNumber) }
       }
 
       return {...config, [name]: +pageNumber}
     }, {})
 }