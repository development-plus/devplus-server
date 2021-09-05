const db = require("mongoose")
db.connect(`mongodb+srv://db:${process.env.dbpw}@clusterfuck.00hoj.mongodb.net/test`)
const user = new db.model('user', {name: String})
module.exports = {
    user: user,
    
}