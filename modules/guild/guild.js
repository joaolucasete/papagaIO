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
    }
    newMember(guild, member) {
        const embed = new this._client.embed
        embed
            .author('Seja muito bem vindo(a)!', guild.dynamicIconURL())
            .description(`Oii ${member.user.username}, tudo bem ? espero que se divirta conosco mas, 
            antes de interagir com nossos amigos.`)
            .thumbnail(member.user.dynamicAvatarURL(null, 512))
            .color(0x005214)
            .timestamp()

        guild.channels.get('648193814003187757')
            .createMessage({ embed })

        this.logger.info(`O membro ${member.user.username} entrou no servidor`)
    }

    delMember(guild, member) {
        const embed = new this._client.embed
        embed
            .author('Estou muito triste!', guild.dynamicIconURL())
            .description(`Nosso amigo ${member.user.username} acabou indo embora`)
            .thumbnail(member.user.dynamicAvatarURL(null, 512))
            .color(0x005214)
            .timestamp()

        guild.channels.get('648193814003187757')
            .createMessage({ embed })

        this.logger.info(`O membro ${member.user.username} saiu no servidor`)
    }
}