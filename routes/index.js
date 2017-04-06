var express  = require('express');
var router   = express.Router();
const Client = require('../models/clients');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {

  console.log("req body: ", req.body);

  const newClient = new Client ({
    fullname : req.body.fullname,
    email    : req.body.email,
    phone    : req.body.phone,
    dob      : req.body.dob.formatted,
    sex      : req.body.genOpt,
  });

  newClient.save( (err, user) => {
    if(err){
      console.log('error saving new client');
      return res.send(err);
    } else {
      return res.json({ message: "new client saved", user: user});
    }
  });

});

router.put('/assessment', function(req, res) {
  var userId = req.headers.user;
  console.log("user2: ", userId);


  var q1 = req.body.q1  ;
  var q2 = req.body.q1  ;
  var q3 = req.body.q3  ;
  var q4 = req.body.q4  ;
  var q5 = req.body.q5  ;
  var q6 = req.body.q6  ;
  var q7 = req.body.q7  ;
  var q8 = req.body.q8  ;
  var q9 = req.body.q9  ;
  var q10 = req.body.q10 ;
  var q11 = req.body.q11 ;
  var q12 = req.body.q12 ;
  var q13 = req.body.q13 ;
  var q14 = req.body.q14 ;
  var q15 = req.body.q15 ;

  Client.findByIdAndUpdate(userId, {
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15

  }, (err, user) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        message: 'Client answers added', user: user
      });
    }
  });
});



module.exports = router;
