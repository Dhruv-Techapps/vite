import { firebaseOauth } from './firebase-oauth.js';

describe('firebaseOauth', () => {
  it('should work', () => {
    expect(firebaseOauth()).toEqual('firebase-oauth');
  });
});
