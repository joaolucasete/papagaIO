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

    const [WebhookID, WebhookToken] = process.env.WEBHOOKURL.split('/').splice(5)

    const options = {
      content,
      wait: true,
      username: `Sugestão ~ ${msg.author.username}`,
      avatarURL: msg.author.dynamicAvatarURL()
    }
    const resWebhook = await client.executeWebhook(WebhookID, WebhookToken, options)
    await msg.guild.channels.get(resWebhook.channel_id)
      .addMessageReaction(resWebhook.id, '✅')
  }
}