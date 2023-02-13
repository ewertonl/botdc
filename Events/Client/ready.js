module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.username} Foi Ligado Com Sucesso!`);
    }
}