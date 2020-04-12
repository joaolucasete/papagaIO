global.include = file => require(`${__dirname}/${file}`)

const { Client } = include('src/index');
const { join } = require('path');

require("dotenv").config();

const Chlorine = new Client({
    token:   process.env.TOKEN,
    modules: '/modules',
    admins:  ['268351613771448320']
});

Chlorine.register("commands", join("/commands"), { groupedCommands: true })

Chlorine.run()

const http = require('http');

http.createServer((req, res) => {
  res.write('OK!');
  res.end();
}).listen('800');