const Module = include("src/structures/Module");

module.exports = class Ready extends Module {
    constructor(...args) {
        super(...args, {
            name: "system:ready",
            events: { ready: "connected" }
        })
    }
    connected() {
        this.logger.info("Eu estou rodando com nome: ", this._client.user.username);
    }
}