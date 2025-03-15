import { googleSheets } from './google-sheets.js';

describe('googleSheets', () => {
  it('should work', () => {
    expect(googleSheets()).toEqual('google-sheets');
  });
});
