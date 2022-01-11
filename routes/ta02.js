const express = require('express');
const router = express.Router();

const users = [
  {
    name: 'Jim Carry'
  },
  {
    name: 'Bob Hope'
  },
  {
    name: 'Scarlett Johansson'
  }
];

let errorMsg = '';

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02',
    users: users,
    errorMsg: errorMsg
  });
  errorMsg = '';
});

router.post('/addUser', (req, res, next) => {
  const { name } = req.body;
  const userIndex = users.findIndex((user) => user.name === name);
  if (userIndex < 0) {
    users.push({ name: name });
  } else {
    errorMsg = `User ${name} already exists.`;
  }
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const { name } = req.body;
  const userIndex = users.findIndex((user) => user.name === name);
  if (userIndex >= 0) {
    users.splice(userIndex, 1);
  } else {
    errorMsg = `User ${name} does not exist.`;
  }
  res.redirect('/ta02');
});

module.exports = router;
