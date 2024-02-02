export const API_COMPETITORS_URL = 'https://my-json-server.typicode.com/magutierrez/uda_competitors_list'
export const API_HERE_KEY = 'blFNwMySu-SQ8L0JZZrWuPUh6RJn1bFFTXFeNsTrTgQ'

export const providerConfig = {
  fetcher: url =>  fetch(`${API_COMPETITORS_URL}${url}`).then(res => res.json().then(data => ({response: data, headers: res.headers}))),
  dedupingInterval: 60000 * 5,
}

export const CARDS_PER_PAGE = 6

export const SORT_STRATEGIES = {
  group: 'group',
  singleAscendant: 'singleAscendant',
  singleDescendant: 'singleDescendant'
}

export const TYPE_OF_PROPERTIES = [
  'Ático',
  'Dúplex',
  'Chalet',
  'Piso',
  'Chalet pareado',
  'Chalet adosado',
  'Estudio',
  'Finca rústica',
  'Habitación'
]

export const LOCALE = 'es-ES'
export const CURRENCY = 'EUR'

export const ACTIONS_CONFIG = [
  {
    key: 'property_type',
    name: 'Tipo de inmueble',
    strategy: SORT_STRATEGIES.group,
    values: TYPE_OF_PROPERTIES.map((property, index) => ({name: property, value: index + 1}))
  },
  {
    key: 'area',
    name: 'Más m2',
    strategy: SORT_STRATEGIES.singleDescendant,
  },
  {
    key: 'area',
    name: 'Menos m2',
    strategy: SORT_STRATEGIES.singleAscendant,
  },
  {
    key: 'bathrooms',
    name: 'Más baños',
    strategy: SORT_STRATEGIES.singleDescendant,
  },
  {
    key: 'bathrooms',
    name: 'Menos baños',
    strategy: SORT_STRATEGIES.singleAscendant,
  },
  {
    key: 'price',
    name: 'Precios más altos',
    strategy: SORT_STRATEGIES.singleDescendant,
  },
  {
    key: 'price',
    name: 'Precios más bajos',
    strategy: SORT_STRATEGIES.singleAscendant,
  },
]