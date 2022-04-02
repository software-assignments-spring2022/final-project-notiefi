const fake = require('../fake');

const classes = fake.classes(20);
const faker = require('faker');

module.exports = {
  get: (req, res) => {
    res.send(classes);
  },

  post: (req, res) => {
    const c = {
      id: faker.datatype.uuid(),
      name: req.body.name,
      classCode: req.body.classCode,
      university: req.body.university,
      createdAt: faker.date.past(),
    };
    classes.push(c);
    res.send(c);
  },

  getById: (req, res) => {
    let c = classes.find((c) => c.id === req.params.id);
    if (c) {
      res.send(c);
    } else {
      res.status(404).send('Class not found');
    }
  },

  put: (req, res) => {
    let c = classes.find((c) => c.id === req.params.id);

    c.name = req.body.name;

    res.send(c);
  },

  delete: (req, res) => {
    let c = classes.find((c) => c.id === req.params.id);

    if (c) {
      classes.splice(classes.indexOf(c));
      res.send('Class deleted');
    } else {
      res.status(404).send('Class not found');
    }
  },
};