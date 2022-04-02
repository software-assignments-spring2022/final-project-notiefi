const fake = require('../fake');

const users = fake.users(10);
const faker = require('faker');

module.exports = {
  get: (req, res) => {
    res.send(users);
  },

  post: (req, res) => {
    const user = {
      id: faker.datatype.uuid(),
      name: req.body.name,
      university: req.body.university,
      email: req.body.email,
      password: req.body.password,
      createdAt: faker.date.past(),
    };
    users.push(user);
    res.send(user);
  },

  getById: (req, res) => {
    let user = users.find((user) => user.id === req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  },

  put: (req, res) => {
    let user = users.find((user) => user.id === req.params.id);

    user.name = req.body.name;

    res.send(user);
  },

  delete: (req, res) => {
    let user = users.find((user) => user.id === req.params.id);

    if (user) {
      users.splice(users.indexOf(user), 1);
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  },
};
