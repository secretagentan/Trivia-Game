const express = require('express');
const router = express.Router();
const Handlebars = require('handlebars');
const getQuestion = require('../lib/getQuestion.js');
const answerShuffle = require('../lib/answerShuffle.js')
const Profile = require('../models/userProfiles.js');
const gameRooms = require('../models/gameRooms.js');

router.get('/', (req, res, next) => {
  if (!req.session.user) {
    res.render('index', {title: 'Login Page'});
  } else {
    const user = JSON.stringify(req.session.user)
    res.render('new', {title: 'New Game'});
  }
});

router.get('/new', (req, res, next) => {
  res.render('new', {title: 'New Game'});
});

var num = 1;
router.get('/question', (req, res, next) => {
    if(num < 10){
      gameRooms.find({url: req.query.gameUrl}, function(err, data){
        var callback = function(exactData){
          answerShuffle.answerShuffle(exactData, function(shuffleData) {
            res.send({question: exactData.question, answers: shuffleData});
            num++;
          });
        }
        return callback(data[0].allQuestions[num]);
      });
    } else {
        console.log('I am the else statement Justin');
        res.render('new', {title: 'New Game'});
        num = 1;
      }
});

router.get('/game/:id', (req, res, next) => {
  var fullUrl = '/game/' + req.params.id;
  gameRooms.find({url: fullUrl }, function(err, results) {
    if (err) {
      console.log(err);
    } else if (results.length === 0) {
        getQuestion(function(allData, question, data) {
          answerShuffle.answerShuffle(data, function(shuffleData) {
            var gameRoom = new gameRooms({
              url: fullUrl,
              activeUsers: 1,
              allQuestions: allData,
            });
            gameRoom.save();
            res.render('game', {question: allData[0].question, answers: shuffleData});
          });
        });
      } else if(results) {
          gameRooms.find({url: fullUrl}, function(err, results) {
            var formatted_results = results[0].allQuestions[0];
            answerShuffle.answerShuffle(formatted_results, function(shuffleData) {
              res.render('game', {question: formatted_results.question, answers: shuffleData});
            });
          });
        }
  });
});

router.delete('/game/:id', (req, res, next) => {
  var fullUrl = '/game/' + req.params.id;
  gameRooms.findOneAndRemove({url: fullUrl}, function(err) {
    if (err) {
      console.log(err)
    }
  })
})

router.get('/user', (req, res, next) => {
  var userId = req.session.user.id;
  Profile.findOne({_id: userId}, (err, userData) => {
    res.render('profile', {title: 'Player Profile', info: userData});
  });
});

router.get('/user.json', (req, res, next) => {
  Profile.find({}, 'name avatar score.gamesWon score.gamesPlayed', function(err, userData) {
    res.send(userData)
  })
})

router.post('/user', (req, res, next) => {
  var userId = req.session.user.id;
  Profile.update({_id: userId}, { $set: { name: req.body.newName }},(err, userData) => {
  res.redirect('/user');
  });
});

router.get('/user/:id', (req, res, next) => {
  var userId = req.params.id;
  Profile.findOne({_id: userId}, (err, userData) => {
    res.render('pubProfData', {title: 'Player Profile', info: userData});
  });
});

router.get('/browse', (req, res, next) => {
  Profile.find({}, (err, allData) => {
    res.render('browse',  { title: 'Browse Profiles', profile: allData });
  });
});

router.get('/test', (req, res, next) => {
  res.render('test')
});

module.exports = router
