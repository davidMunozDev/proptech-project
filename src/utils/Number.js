import { CURRENCY, LOCALE } from '@/config';

import { validateParamsTypes } from '@/utils/validation'

export function localizeNumber(number) {
  validateParamsTypes([{value: number, type: 'number'}])
  
  return number ? number.toLocaleString(LOCALE, {
		style: 'currency',
		maximumFractionDigits: 0,
		currency: CURRENCY,
	}) : '0';
}