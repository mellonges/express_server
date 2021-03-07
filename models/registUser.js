const {Schema, model} = require('mongoose')

const schema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String}
});

module.exports = model( "Registry",schema)