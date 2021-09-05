const { ShardingManager } = require('discord.js');
require('dotenv').config()
const manager = new ShardingManager('./bot/bot.js', { token: process.env.token });
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("wip")
})
app.listen(port, () => {
    console.log("web app started at " + port + "port")
})
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();
