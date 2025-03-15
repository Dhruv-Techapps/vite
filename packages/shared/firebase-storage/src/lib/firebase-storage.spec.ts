import { firebaseStorage } from './firebase-storage.js';

describe('firebaseStorage', () => {
  it('should work', () => {
    expect(firebaseStorage()).toEqual('firebase-storage');
  });
});
