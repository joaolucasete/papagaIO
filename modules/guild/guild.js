const Module = include("src/structures/Module");

module.exports = class Guild extends Module {
    constructor(...args) {
        super(...args, {
            name: "guild",
            events: {
                guildMemberAdd: "newMember",
                guildMemberRemove: "delMember"
            }
        })
        this.channelID = process.env.WELCOMECHANNEL
    }
    newMember(guild, member) {
        this.sendEmbed(guild, member, 'Seja muito bem vindo(a)!',
            `Oii ${member.user.username}, tudo bem ? espero que se divirta conosco!`)

        this.logger.info(`O membro ${member.user.username} entrou no servidor`)
    }

    delMember(guild, member) {

        this.sendEmbed(guild, member, 'Estou muito triste!',
            `Nosso amigo ${member.user.username} acabou indo embora`)

        this.logger.info(`O membro ${member.user.username} saiu no servidor`)
    }

    sendEmbed(guild, member, author, description) {
        const embed = new this._client.embed
        embed
            .author(author, guild.dynamicIconURL())
            .description(description)
            .thumbnail(member.user.dynamicAvatarURL(null, 512))
            .color(0x005214)
            .timestamp()

        guild.channels.get(this.channelID)
            .createMessage({ embed })
    }
}