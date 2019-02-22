const Schema = require('mongoose').Schema
const plm  =require('passport-local-mongoose')

const playerSchema = new Schema({
  name: String,
  paternal: String,
  maternal: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  general: Object
},{
  timestamps:{
    createdAt: true,
    updatedAt: true
  },
  versionKey: false
})

playerSchema.plugin(plm, {usernameField: 'email'})
module.exports = require('mongoose').model('Player', playerSchema)