const mongoose = require('mongoose')
const Data = require('./common/config')

try {
    mongoose.connect(`${mongodb} ${mongoclient} ${dburl}`)
} catch (error) {
    console.log(error)
}

module.exports = mongoose