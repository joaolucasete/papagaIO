module.exports = {
  name: 'parseMessage',
  priority: 1,
  process: async container => {
    const { msg, commands } = container;
    const prefix = process.env.PREFIX;
    const language = process.env.LOCALE;

    if (!msg.content.startsWith(prefix)) return;

    const rawArgs = msg.content.substring(prefix.length).split(' ');
    container.trigger = rawArgs[0].toLowerCase();
    container.isCommand = commands.has(container.trigger);
    container.rawArgs = rawArgs.slice(1).filter(v => v);
    container.settings = { lang: language, prefix }
    return Promise.resolve(container);
  }
}