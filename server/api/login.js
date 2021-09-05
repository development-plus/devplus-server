const { app } = require("./server/express")
const crypto = require('node:crypto')
module.exports = {
rand = app.get('/api/rand', (req, res) => {
    res.send(crypto.randomBytes(32).toString("base64"))
}),
}