const Discord = require('discord.js')
const token = process.env.token
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]})

client.login(token);
client.once('ready', () => {
    console.log('ready! initializing...')
    // init code here
    console.log('initialization complete!')
})