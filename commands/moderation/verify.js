const { Command } = include("src/index");

module.exports = class Verify extends Command {
    constructor(...args) {
        super(...args, {
            name: 'verify',
            group: 'moderation',
            aliases: ['aceito'],
            cooldown: 5,
            options: {
                guildOnly: true,
            },
            usage: []
        });
    }

    async handle({ msg, client }, responder) {
        msg.delete()
        const channelVerify = '697781336827625503'

        if (msg.channel.id != channelVerify) return

        const message = `
        Crrác Crrác. Oi! Eu sou o Papaga**IO**, o bot ajudante do IO Land!
        O IO Land é um servidor de programação focado em desafios. A cada mês, nós teremos 15 desafios diferentes para melhorar as habilidades de programação dos participantes! Além disso, temos vários canais para caso você queira ajuda no seu projetinho. É isso, seja bem-vindo!`

        const embedVerify = new client.embed
        embedVerify
            .color(0x591a9c)
            .author(client.user.username, client.user.dynamicAvatarURL())
            .description(message)
            .image('https://i.imgur.com/yXnyFx9.gif')

        msg.member.addRole('697598605183156295').catch(() => { })
        const dm = await msg.author.getDMChannel()
        dm.createMessage({ embed: embedVerify })
    }
}