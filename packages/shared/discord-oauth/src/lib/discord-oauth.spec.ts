import { discordOauth } from './discord-oauth.js';

describe('discordOauth', () => {
  it('should work', () => {
    expect(discordOauth()).toEqual('discord-oauth');
  });
});
