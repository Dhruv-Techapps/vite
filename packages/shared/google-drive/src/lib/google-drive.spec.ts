import { googleDrive } from './google-drive.js';

describe('googleDrive', () => {
  it('should work', () => {
    expect(googleDrive()).toEqual('google-drive');
  });
});
