const Command = include("src/structures/Command");

module.exports = class Kick extends Command {
  constructor(...args) {
    super(...args, {
      name: 'kick',
      group: 'moderation',
      cooldown: 5,
      options: {
        guildOnly: true,
        permissions: ["kickMembers"],
        botPerms: ["kickMembers"]
      },
      usage: [
        { name: 'member', displayName: 'member', type: 'member', optional: false },
        { name: 'reason', displayName: 'optional[reason]', type: 'string', optional: true, last: true }
      ]
    });
  }

  async handle({ args, client, msg }, responder) {
    const member = args.member[0]
    try {
      await member.kick(args.reason[0] || "Nenhuma razão especificada")
      return responder.send(`O membro \`\`${member.user.username}\`\` foi kicado do servidor`)
    } catch (e) {
      const msg = "Eu não possuo permissão para kicar esse usuário"
      this.logger.error(msg, e)
      return responder.error(msg)
    }
  }
}