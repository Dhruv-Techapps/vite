import { firebaseFirestore } from './firebase-firestore.js';

describe('firebaseFirestore', () => {
  it('should work', () => {
    expect(firebaseFirestore()).toEqual('firebase-firestore');
  });
});
