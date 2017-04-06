const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/surveys')
const Client   = require('../models/clients');

const clients = [
  {
    fullname : 'Bob Cat',
    email    : 'you@suck.com',
    phone    : 0798574743453,
    dob      : 07-04-1996,
    sex      : 'F',
    q1       : " ",
    q2       : " ",
    q3       : " ",
    q4       : " ",
    q5       : " ",
    q6       : " ",
    q7       : " ",
    q8       : " ",
    q9       : " ",
    q10      : " ",
    q11      : " ",
    q12      : " ",
    q13      : " ",
    q14      : " ",
    q15      : " "
  },
  {
    fullname: 'Star Fish',
    email    : 'uu@suck.com',
    phone    : 4567,
    dob      : 6-03-1967,
    sex      : 'M',
    q1       : " ",
    q2       : " ",
    q3       : " ",
    q4       : " ",
    q5       : " ",
    q6       : " ",
    q7       : " ",
    q8       : " ",
    q9       : " ",
    q10      : " ",
    q11      : " ",
    q12      : " ",
    q13      : " ",
    q14      : " ",
    q15      : " "
  }
];

Client.create(clients, (err, docs)=>{
  if (err){throw(err);
  }

  docs.forEach( (client)=>{
    console.log(client.fullname);
  })

  mongoose.connection.close();
});
