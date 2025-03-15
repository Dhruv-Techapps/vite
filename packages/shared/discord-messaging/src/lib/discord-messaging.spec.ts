import { discordMessaging } from './discord-messaging.js';

describe('discordMessaging', () => {
  it('should work', () => {
    expect(discordMessaging()).toEqual('discord-messaging');
  });
});
