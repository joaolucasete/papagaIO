const Module = include("src/structures/Module");

module.exports = class Ready extends Module {
    constructor(...args) {
        super(...args, {
            name: "system:ready",
            events: { ready: "connected" }
        })
    }
    connected() {
        const { guilds, users } = this._client;
        const statuses = [
            { type: 0, name: 'As trevas aguardam seu momento de glória enquanto a luz glorifica sua fajuta vitória.' },
            { type: 3, name: 'you type' },
            { type: 0, name: 'the saxophone' },
            { type: 2, name: 'your voices' },
            { type: 3, name: 'some lewdies' },
            { type: 0, name: 'a fun game' },
            { type: 3, name: 'anime' },
            { type: 0, name: 'the piano' },
            { type: 0, name: 'with cute girls' },
            { type: 0, name: 'the violin' },
            { type: 3, name: 'you struggle' },
            { type: 0, name: 'with catgirls' },
            { type: 0, name: `with ${users.size} users` },
            { type: 2, name: `to ${users.size} users` },
            { type: 3, name: `${users.size} users` },
            { type: 0, name: `in ${guilds.size} servers` },
            { type: 3, name: `${guilds.size} servers` }
        ];
        this.logger.info("I'm ready with name: ", this._client.user.username);
        setInterval(() => {
            this._client.editStatus(statuses[~~(Math.random() * statuses.length)])
        }, 60 * 1000)
    }
}