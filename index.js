const { Client, GatewayIntentBits, Partials } = require(`discord.js`);
const config = require(`./config.json`);
const { Guilds, GuildMembers, DirectMessages} = GatewayIntentBits;
const { Channel, GuildMember, Message, User, Reaction } = Partials;
const client = new Client ({ intents: [ Guilds, GuildMembers, DirectMessages ], partials: [ Channel, GuildMember, Message, User, Reaction ] });
const { loadEvents } = require('./handLers/eventHandler');
const { loadEvents } = require('./handLers/eventHandler');

client.login(config.token);