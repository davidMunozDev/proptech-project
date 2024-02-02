import 'whatwg-fetch'
import { expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

window.matchMedia = window.matchMedia || function() {
    return {
       matches : false,
       addListener : function() {},
       removeListener: function() {}
    };
};