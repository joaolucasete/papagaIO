const Command = include("src/structures/Command");

module.exports = class Suggestion extends Command {
  constructor(...args) {
    super(...args, {
      name: 'suggestion',
      aliases: ['sg'],
      group: 'moderation',
      cooldown: 5,
      options: {},
      usage: [
        { name: 'suggestion', displayName: 'string', type: 'string', optional: false, last: true },
      ]
    });
  }

  async handle({ args, client, msg }, responder) {
    const content = args.suggestion
    const { WEBHOOKID, WEBHOOKTOKEN } = process.env
    const options = {
      content,
      wait: true,
      username: `Sugestão ~ ${msg.author.username}`,
      avatarURL: msg.author.dynamicAvatarURL()
    }
    const resWebhook = await client.executeWebhook(WEBHOOKID, WEBHOOKTOKEN, options)
    const channel = await msg.guild.channels.get(resWebhook.channel_id)
    channel.addMessageReaction(resWebhook.id, '😝')
    channel.addMessageReaction(resWebhook.id, '❌')
  }
}