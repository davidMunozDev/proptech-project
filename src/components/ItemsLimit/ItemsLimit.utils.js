import { range } from '@/utils/Array';
import { validateParamsTypes } from '@/utils/validation';

export function getLimits(total, pageItems) {
  validateParamsTypes([{type: 'number', value: total}, {type: 'number', value: pageItems}])

  const totalItems = total || pageItems
  const limitsBeforeTotal = range(1, Math.ceil(totalItems / pageItems) - 1);
  return [
    ...limitsBeforeTotal.map(e => {
      const limit = e * pageItems;

      return { name: limit + '', value: limit };
    }),
    { name: 'All', value: total },
  ];
}