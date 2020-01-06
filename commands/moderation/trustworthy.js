const Command = include("src/structures/Command");

module.exports = class Trustworthy extends Command {
  constructor(...args) {
    super(...args, {
      name: 'trustworthy',
      aliases:['tw'],
      group: 'moderation',
      cooldown: 5,
      options: {
        guildOnly: true,
      },
      usage: [
        { name: 'member', displayName: 'member', type: 'member', optional: false },
      ]
    });
  }

  async handle({ args, client, msg }, responder) {
    const member = args.member[0]
    const reason = `${msg.author.username}: considerou usuario confiavel`
    const roleTrustworthy = await msg.guild.roles.get(process.env.TRUSTWORTHY)
    
    try {
      await member.addRole(roleTrustworthy.id, reason)
      return responder.send(`Cargo \`\`${roleTrustworthy.name}\`\` adicionado ao membro: \`\`${member.user.username}\`\``)
    } catch (e) {
      const msg = "Eu não possuo permissão para adicionar cargo à esse usuário"
      this.logger.error(msg)
      this.logger.error(e)
      return responder.error(msg)
    }
  }
}