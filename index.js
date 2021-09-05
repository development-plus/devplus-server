const { ShardingManager } = require('discord.js');
require('dotenv').config()
const manager = new ShardingManager('./bot/bot.js', { token: process.env.token });
const { app } = require("./server/express")
app.get('/', (req, res) => {
    res.send("wip")
})
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();
