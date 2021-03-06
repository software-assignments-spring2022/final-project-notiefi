const users = require('../models/user');
const notes = require('../models/note');
const classes = require('../models/class');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

module.exports = {
  // /users
  get: async (req, res) => {
    try {
      const user = await users.find();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  post: async (req, res) => {
    const user = await users.findOne({ email: req.body.email }).exec();
    if (user) {
      try {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        console.log('exists');
        res.cookie('token', token);

        res.send({ token: token, user: user });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const user = new users({
          name: req.body.name,
          university: req.body.university,
          email: req.body.email,
          picture: req.body.picture,
        });
        await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        console.log('saved');
        res.cookie('token', token);
        res.send({ user: user, token: token });
      } catch (err) {
        console.log(err);
      }
    }
  },

  // /users/:id
  getById: async (req, res) => {
    try {
      const user = await users.findById(req.user);
      console.log(req.user);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.log(err);
      console.log('user is not here');
      res.status(404).send('User not found');
    }
  },

  put: async (req, res) => {
    try {
      const user = await users.findById(req.user);

      user.name = req.body.name;
      await user.save();

      res.send(user);
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (req, res) => {
    const user = await users.findById(req.user);

    try {
      if (user) {
        await users.findByIdAndRemove(req.user);
        res.send('User deleted');
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  },

  // /users/:id/notes

  getNotes: async (req, res) => {
    try {
      const usersNotes = await notes.find({ user: req.user });
      if (usersNotes) {
        res.send(usersNotes);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  },

  // /users/:id/classes

  getClasses: async (req, res) => {
    let userClasses = [];
    try {
      const user = await users.findById(req.user);
      if (user) {
        for (let i = 0; i < user.savedClasses.length; i++) {
          const classs = await classes.findById(user.savedClasses[i]);
          userClasses.push(classs);
        }
        res.send(await userClasses);
      }
    } catch (err) {
      console.log(err);
    }
  },
  // /users/:id/likes

  getLikes: async (req, res) => {
    let userLikes = [];
    try {
      const user = await users.findById(req.user);
      if (user) {
        for (let i = 0; i < user.likedNotes.length; i++) {
          const note = await notes.findById(user.likedNotes[i]);
          userLikes.push(note);
        }
        res.send(userLikes);
      } else {
        res.status(404).send('user not found');
      }
    } catch (err) {
      console.log(err);
    }
  },

  addClass: async (req, res) => {
    try {
      const user = await users.findById(req.user);

      const classs = await classes.findById(req.body.classID);

      classs.numEnrolled++;

      user.savedClasses.push(classs._id.toString());
      await user.save();
      await classs.save();
      res.send('Class added to user');
    } catch (err) {
      console.log(err);
    }
  },

  deleteClass: async (req, res) => {
    try {
      const user = await users.findById(req.user);

      const classs = await classes.findById(req.body.classID);

      user.savedClasses = user.savedClasses.filter(
        (classs) => classs.toString() !== req.body.classID
      );

      classs.numEnrolled--;

      await classs.save();

      await user.save();
      res.send('Class deleted from user');
    } catch (err) {
      res.status(404).send('Class not found');
      console.log(err);
    }
  },
};
