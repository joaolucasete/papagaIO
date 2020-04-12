const Module = include("src/structures/Module");

module.exports = class Guild extends Module {
    constructor(...args) {
        super(...args, {
            name: "guild",
            events: {
                guildMemberAdd: "newMember",
            }
        })
        this.channelID = '697573290121756784'
    }
    newMember(guild, member) {
        this.sendEmbed(guild, member, 'Seja muito bem vindo(a)!',
            `Oii ${member.user.mention}, tudo bem ? espero que se divirta conosco!`)

        this.logger.info(`O membro ${member.user.username} entrou no servidor`)
    }

    delMember(guild, member) {

        this.sendEmbed(guild, member, 'Estou muito triste!',
            `Nosso amigo ${member.user.mention} acabou indo embora`)

        this.logger.info(`O membro ${member.user.username} saiu no servidor`)
    }

    sendEmbed(guild, member, author, description) {
        const embed = new this._client.embed
        embed
            .author(author, member.user.dynamicAvatarURL())
            .description(description)
            .color(0x591a9c)

        guild.channels.get(this.channelID)
            .createMessage({ embed })
    }
}