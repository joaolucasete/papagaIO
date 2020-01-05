const Command = include("src/structures/Command");

module.exports = class Ban extends Command {
  constructor(...args) {
    super(...args, {
      name: 'ban',
      group: 'moderation',
      cooldown: 5,
      options: {
        guildOnly: true,
        permissions: ["banMembers"],
        botPerms: ["banMembers"]
      },
      usage: [
        { name: 'member', displayName: 'member', type: 'member', optional: false },
        { name: 'reason', displayName: 'optional[reason]', type: 'string', optional: true, last: true }
      ]
    });
  }

  async handle({ args, client, msg }, responder) {
    const member = args.member[0]
    const deleteMessageDays = 14
    try {
      await member.ban(deleteMessageDays, args.reason[0] || "Nenhuma razão especificada")
      return responder.send(`O membro \`\`${member.user.username}\`\` foi banido do servidor`)
    } catch (e) {
      const msg = "Eu não possuo permissão para banir esse usuário"
      this.logger.error(msg, e)
      return responder.error(msg)
    }
  }
}