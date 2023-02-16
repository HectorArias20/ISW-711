const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require("mongoose");
const mongodb = mongoose.connect("mongodb://localhost:27017/FIFA").then(() => console.log('conect to mongodb')).catch((err) => console.log(err));
const TeamModel = require("./Model/team");
const team = require('./Model/team');
const playe = require('./Model/players')
const model = require('./Model/model')
app.use(express.json())
    //Get Teams
app.get('/tipoteam', (req, res) => {

    res.json({
        "Name": "France",
        "Country ": "USA"

    });


});




// Create teams
app.post('/team', (req, res) => {

    const team = new Team.model();

    team.name = req.body.name,
        team.description = req.body.description;

    if (team.name && team.description) {
        team.save(function(err) {
            if (err) {
                res.status(422);
                console.log('Error while saving team', err)
                res.json({
                    error: 'Error saving team'
                });
            }
            res.status(201); //CREATED
            res.header({
                'location': `http://localhost:3000/api/team/?id=${team.id}`
            });
            res.json(team);
        });

    } else {
        res.status(422);
        console.log('Error saving the team')
        res.json({
            error: 'No valid'
        });
    }

});


app.post('/player', (req, res) => {

    const player = new players.model();

    player.namePlayer = req.body.namePlayer;
    player.descriptionPlayer = req.body.descriptionPlayer;
    player.equipo = req.body.equipo;
    //find team
    Team.model.findById(req.body.team, (error, teamFound))
    player.team = teamFound

    if (player.namePlayer && player.descriptionPlayer) {
        player.save(function(err) {
            if (err) {
                res.status(422);
                console.log('Error while saving team', err)
                res.json({
                    error: 'Error saving team'
                });
            }
            res.status(201); //CREATED
            res.header({
                'location': `http://localhost:3000/api/player/?id=${player.id}`
            });
            res.json(player);
        });

    } else {
        res.status(422);
        console.log('Error saving the team')
        res.json({
            error: 'No valid'
        });
    }

});

app.patch('api/team/:id', (req, res) => {

    const team = new TeamModel();

    // get team by id
    if (req.query && req.query.id) {
        team.findById(req.query.id, function(err, team) {
            if (err) {
                res.status(404);
                console.log('error queryting the task', err)
                res.json({ error: "Task doesnt exist" })
            }

            // update the team object (patch)
            team.name = req.body.name ? req.body.name : team.name;
            team.description = req.body.description ? req.body.description : team.description;


            team.save(function(err) {
                if (err) {
                    res.status(422);
                    console.log('Error saving team', err)
                    res.json({
                        error: 'Error saving the team'
                    });
                }
                res.status(200);
                res.json(team);
            });
        });
    } else {
        res.status(404);
        res.json({ error: "Team doesnt exist" })
    }
});


app.delete('/team/:id', (req, res) => {
    const team = new TeamModel();
    const id = req.params.id
    team.remove({ _id: id }).then((data) => res.json(data).catch((err) => res.json({ message: err })))
        // Delete the resource with the specified identifier
});







app.listen(3000, () => console.log('Fifa app listening port 3000'))