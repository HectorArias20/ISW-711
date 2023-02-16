const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Team = require('./team')



const player = new Schema({
    namePlayer: { type: String },
    descriptionPlayer: { type: String },
    equipo: { type: String },
    team: { type: Team.schema }

});


const playerModel = mongoose.model('players', player);


module.exports = {
    "schema": player,
    "model": mongoose.model('players', player)
}