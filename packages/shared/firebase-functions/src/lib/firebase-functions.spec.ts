import { firebaseFunctions } from './firebase-functions.js';

describe('firebaseFunctions', () => {
  it('should work', () => {
    expect(firebaseFunctions()).toEqual('firebase-functions');
  });
});
