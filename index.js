const { Client, GatewayIntentBits, Partials, Collection } = require(`discord.js`);
const config = require(`./config.json`);
const { Guilds, GuildMembers, DirectMessages} = GatewayIntentBits;
const { Channel, GuildMember, Message, User, Reaction } = Partials;
const client = new Client ({ intents: [ Guilds, GuildMembers, DirectMessages ], partials: [ Channel, GuildMember, Message, User, Reaction ] });
const { loadEvents } = require('./handlers/eventHandler');
const { loadCommands } = require('./handlers/commandHandler');

client.commands = new Collection();


client.login(config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
});

