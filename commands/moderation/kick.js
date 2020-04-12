const { Command } = include('src/index')

module.exports = class Kick extends Command {
    constructor(...args) {
        super(...args, {
            name: 'kick',
            group: 'moderation',
            aliases: [],
            cooldown: 5,
            description: 'Kick a user',
            options: {
                guildOnly: true,
                localeKey: 'commands',
                permissions: ['kickMembers']
            },
            usage: [{
                name: 'member',
                displayName: 'id/mention/username',
                type: 'member',
                optional: false
            },
            {
                name: 'reason',
                displayName: 'reason',
                type: 'string',
                max: 512,
                last: true,
                optional: true
            }]
        })
    }

    async handle({ args, msg, client }, responder) {
        const member = args.member[0];
        const reason = args.reason || `Nada especificado por ${msg.author.username}`;
        const userBot = msg.guild.members.get(client.user.id);

        const punisherhighestRole = member.highestRole.position < msg.member.highestRole.position
        const bothighestRole = member.highestRole.position < userBot.highestRole.position

        if (!punisherhighestRole)
            return responder.error('você não pode kickar alguém com um cargo maior ou igual ao seu. >:C');
        if (!bothighestRole)
            return responder.error('calma lá, eu não consigo kickar gente com cargo mais alto que eu.');

        /*member.kick(reason)
            .then(() => responder.success('kickado com sucesso, chefia.'))
            .catch(() => responder.error('{{kick.unexpectedRejection}}'));*/
    };
};