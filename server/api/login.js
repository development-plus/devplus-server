const { app } = require("../express")
const crypto = require('crypto')
module.exports = {
    rand: () => app.get('/api/rand', (req, res) => {
        res.send(crypto.randomBytes(32).toString("base64"))
    }),
}