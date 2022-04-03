const fake = require('../fake');

const notifications = fake.notifications(10);
const faker = require('faker');

const get = (req, res) => {
  res.send(notifications);
};

const post = (req, res) => {
  const notification = {
    id: faker.datatype.uuid(),
    title: req.body.title,
    user: req.body.user,
    likes: 1,
    date: faker.date.past(),
    createdAt: faker.date.past(),
  };
  notifications.push(notification);
  res.send(notification);
};

const getById = (req, res) => {
  let notification = notifications.find((o) => o.id === req.params.id);
  if (notification) {
    res.send(notification);
  } else {
    res.status(404).send('Notification not found');
  }
};

const put = (req, res) => {
  let notification = notifications.find((o) => (o.id = req.params.id));

  if (req.body.title) {
    notification.title = req.body.title;
  }
  res.send(notification);
};

const del = (req, res) => {
  let notification = notifications.find((o) => o.id === req.params.id);

  if (notification) {
    notifications.splice(notifications.indexOf(notification));
    res.send('Note deleted');
  } else {
    res.status(404).send('Notification not found');
  }
};

module.exports = {
  get,
  getById,
  post,
  put,
  delete: del,
};
