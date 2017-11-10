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
        title: 'Express',
    });

});

router.get('/home', (req, res, next) => {
    res.render('home', {})
});

router.post('/routesProcess', (req, res, next) => {
    var currentLocation = req.body.currentLocation
    var distance = req.body.distance
    console.log("hey chris")
    var insertQuery = 'INSERT INTO routes (currentLocation,distance) VALUES (?,?);';
    connection.query(insertQuery, [currentLocation,distance],(error)=>{
    if (error) {
        throw error
    } else {
    	console.log(distance)
    	res.render('map',{
    		address:currentLocation,
    		distance:distance
		})
    }
	});
});

/* HISTORY */
router.get('/history', (req, res, next) => {
    var email = email;
    var historyQuery = "SELECT * FROM history;"; // need to add in where clause to specify user
    connection.query(historyQuery, [email], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('history', {
                runData: 'test',
            })
        }
    })
})

router.get('/map',(req,res,error)=>{
	// res.render('map',{
	// 	coords: {
	// 		originLat:userLocationLatLng.lat,
	// 		originLng:userLocationLatLng.lng
	// 	},
	// 	waypoints:{
	// 		lat1:latArray[0],
	// 		lng1:lngArray[0],
	// 		lat2:latArray[1],
	// 		lng2:lngArray[1],
	// 		lat3:latArray[2],
	// 		lng3:lngArray[2],
	// 		lat4:latArray[3],
	// 		lng4:lngArray[3],
	// 		lat5:latArray[4],
	// 		lng5:lngArray[4],
	// 		lat6:latArray[5],
	// 		lng6:lngArray[5]
	// 	}
	// })
})



module.exports = router;