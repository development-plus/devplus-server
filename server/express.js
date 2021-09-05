const express = require('express');
const app = express()
const port = process.env.PORT || 3000

module.exports = {
    app: app,

}
app.listen(port, () => {
    console.log("web app started at " + port + "port")
})