const express = require('express');

const app = express();

app.use('/api/users',(req,res,next)=>{
  const users= [
    {id: '1sdadad',
     username: 'kareem'
    },
    {id: 'sdfsdf',
     username: 'Maxmillian'
    },
  ]
  res.status(200).json({
    message: 'users fetched successfully!!',
    users: users
  })
})

module.exports = app;
