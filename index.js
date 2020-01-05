const Client = require('./src/Chlorine');
const { join } = require('path');

require("dotenv").config();

global.include = file => require(`${__dirname}/${file}`)

const Chlorine = new Client({
    token: process.env.TOKEN,
    modules: '/modules',
    admins: ['268351613771448320']
});

Chlorine.register("commands", join("/commands"), { groupedCommands: true })

Chlorine.run()