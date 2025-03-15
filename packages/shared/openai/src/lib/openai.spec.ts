import { openai } from './openai.js';

describe('openai', () => {
  it('should work', () => {
    expect(openai()).toEqual('openai');
  });
});
