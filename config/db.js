const mongoose = require('mongoose')

const db_url = "mongodb://0.0.0.0:27017/FP-BE_9"
const db = mongoose.connect(db_url)

module.exports = db