const { SlashCommandBuilder } = require( 'discord.js' );

module.exports = {
    data: new SlashCommandBuilder()
    .setName( 'ping' )
    .setDescription( 'ping' ),
    execute( interaction ) {
        interaction.reply({ content: 'pong!!' });
    }
}