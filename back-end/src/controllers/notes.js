const fake = require('../fake');

const notes = fake.fakeNotes;
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
      attachments: req.body.attachments,
      likes: 1,
      comments: {},
      createdAt: faker.date.past(),
    };
    notes.push(note);
    res.send(note);
    // res.redirect('http://localhost:3000/class');
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
    let note = notes.find((note) => (note.id = req.params.id));

    if (req.body.title) {
      note.title = req.body.title;
    }
    if (req.body.text) {
      note.text = req.body.text;
    }
    res.send(note);
  },

  delete: (req, res) => {
    let note = notes.find((note) => note.id === req.params.id);

    if (note) {
      notes.splice(notes.indexOf(note));
      res.send('Note deleted');
    } else {
      res.status(404).send('Note not found');
    }
  },

  like: (req, res) => {
    let note = notes.find((note) => note.id === req.params.id);
    let liked = req.body.liked;

    if (note && liked) {
      note.likes += 1;

      res.send(note);
    } else if (note && !liked) {
      note.likes -= 1;

      res.send(note);
    } else {
      res.status(404).send('Note not found');
    }
  },

  postNotes: (req, res) => {
    const note = {
      id: faker.datatype.uuid(),
      class: req.body.class,
      title: req.body.title,
      user: req.body.user,
      text: req.body.text,
      attachments: req.body.attachments,
      likes: 1, 
      createdAt: faker.date.past(),
      liked = true,
    };
    notes.push(note);
    res.send('Note saved!');
  },

  getSavedNotes: (req, res) => {
    let note = notes.find((note) => note.liked == true);
    if (note) {
      res.send(note);
    } else {
      res.status(404).send('Note not found');
    }
  },
};


