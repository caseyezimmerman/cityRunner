var express = require('express');
var router = express.Router();
var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');
var request = require('request');
var mysql = require('mysql');
var socketio = require('socket.io');
var app = require('../app');

var connection = mysql.createConnection(config.db);

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'City Runner',
    });
});

router.get('/home', (req, res, next) => {
    res.render('home', {
        name: req.session.name,
        loggedIn: true,
    })
});

/* LOGOUT */
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
})

/* ROUTES */
router.post('/routesProcess', (req, res, next) => {
    var currentLocation = req.body.currentLocation
    var distance = req.body.distance
    var userid = req.session.uid
    console.log(req.session.uid)
    console.log("hey chris")
    var insertQuery = 'INSERT INTO routes (currentLocation,distance,userid) VALUES (?,?,?);';
    connection.query(insertQuery, [currentLocation, distance, userid], (error) => {
        if (error) {
            throw error
        } else {
            console.log(distance)
            res.render('map', {
                address: currentLocation,
                distance: distance
            });
        }
    });
});

/* HISTORY */
router.get('/history', (req, res, next) => {
    var email = email;
    var historyQuery = "SELECT * FROM routes;"; // need to add in where clause to specify user
    connection.query(historyQuery, [email], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('history', { results })
        }
    })
})

router.post('/historyProcess', (req, res, next) => {
    var selectQuery = ' SELECT currentLocation,distance FROM routes WHERE userid = ?;';
    connection.query(selectQuery, [userid], (error, results) => {
        if (error) {
            throw error
        } else {
            res.render('map', {
                address: currentLocation,
                distance: distance
            });
        }

    })
})


module.exports = router;