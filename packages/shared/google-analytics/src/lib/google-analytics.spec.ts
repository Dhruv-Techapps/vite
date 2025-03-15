import { googleAnalytics } from './google-analytics.js';

describe('googleAnalytics', () => {
  it('should work', () => {
    expect(googleAnalytics()).toEqual('google-analytics');
  });
});
