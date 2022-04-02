const fake = require('../fake');

const notes = fake.notes(10);
const faker = require('faker');
const users = require('./users');

module.exports = {
    get: (req, res) => {
        res.send(notes);
    },

    post: (req, res) => {
        const note = {
            id: faker.datatype.uuid(),
            class: req.body.class,
            title: req.body.title,
            user: req.body.user,
            text: req.body.text,
            comments: req.body.comments,
            attachments: req.body.attachments,
            createdAt: faker.date.past(),
        };
        notes.push(note);
        res.send(note);
    },

    getById: (req, res) => {
      let note = notes.find((note) => note.id === req.params.id);
      if (note) {
          res.send(note);
      } else {
          res.status(404).send('Note not found');
      }
    },

    put: (req, res) => {
        let note = notes.find((note) => note.id = req.params.id);
        note.title = req.body.title;
        res.send(note);
    },

    delete: (req, res) => {
        let note = notes.find((note) => note.id === req.params.id);

        if (note) {
            notes.splice(notes.indexOf(note), 1);
            res.send('Note deleted');
        } else {
            res.status(404).send('User not found');
        }
    }


}