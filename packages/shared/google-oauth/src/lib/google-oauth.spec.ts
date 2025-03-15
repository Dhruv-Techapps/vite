import { googleOauth } from './google-oauth.js';

describe('googleOauth', () => {
  it('should work', () => {
    expect(googleOauth()).toEqual('google-oauth');
  });
});
