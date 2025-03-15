import { acfEvents } from './acf-events.js';

describe('acfEvents', () => {
  it('should work', () => {
    expect(acfEvents()).toEqual('acf-events');
  });
});
