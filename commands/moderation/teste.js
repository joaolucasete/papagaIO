const Command = include("src/structures/Command");

module.exports = class Kick extends Command {
  constructor(...args) {
    super(...args, {
      name: 'teste',
      group: 'moderation',
      cooldown: 5,
      options: {
        guildOnly: true,
      },
      usage: []
    });
  }

  async handle({ args, client, msg }, responder) {
    client.emit('guildMemberRemove', msg.guild, msg.guild.members.get(msg.author.id))
  }
}