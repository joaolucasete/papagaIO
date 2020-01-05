const Module = include("src/structures/Module");

module.exports = class Guild extends Module {
    constructor(...args) {
        super(...args, {
            name: "guild",
            events: {
                guildCreate: "newGuild",
                guildDelete: "delGuild"
            }
        })
    }
    newGuild(guild) {

    }

    delGuild(guild) {

    }
}