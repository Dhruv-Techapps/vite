import { firebaseDatabase } from './firebase-database.js';

describe('firebaseDatabase', () => {
  it('should work', () => {
    expect(firebaseDatabase()).toEqual('firebase-database');
  });
});
