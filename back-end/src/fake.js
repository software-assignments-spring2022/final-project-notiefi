const faker = require('faker');

function users(n) {
  const users = [];

  for (let i = 1; i <= n; i++) {
    users.push({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      university: faker.address.cityName() + ' University',
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: faker.date.past(),
    });
  }
  users.push({
    id: '2005b873-dd55-4ebe-8165-76ce6d9b83a6',
    name: 'Test',
    university: 'Test University',
    email: 'test@test.com',
    password: 'test',
    createdAt: '2019-01-01T00:00:00.000Z',
  });
  return users;
}

function notes(n) {
  const notes = [];

  for (let i = 1; i <= n; i++) {
    notes.push({
      id: faker.datatype.uuid(),
      class: faker.datatype.uuid(),
      title: faker.lorem.words(),
      user: faker.datatype.uuid(),
      text: faker.lorem.sentence(5),
      comments: comments(faker.datatype.number({ max: 10 })),
      attachments: attachments(faker.datatype.number({ max: 10 })),
      likes: faker.datatype.number({ max: 1000 }),
      createdAt: faker.date.past(),
    });
  }
  notes.push({
    id: '2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01',
    class: 'Test Class',
    title: 'Test Title',
    user: '11118469-f8b7-4204-b1a9-b875dd5a775b',
    text: 'posted these test notes!',
    comments: comments(faker.datatype.number({ max: 10 })),
    attachments: attachments(faker.datatype.number({ max: 10 })),
    likes: faker.datatype.number({ max: 1000 }),
    createdAt: '2019-01-01T00:00:00.000Z',
  });

  return notes;
}

function comments(n) {
  const comments = [];

  for (let i = 1; i <= n; i++) {
    comments.push({
      user: faker.datatype.uuid(),
      comment: faker.lorem.sentence(1),
      likes: faker.datatype.number({ max: 100 }),
    });
  }
  return comments;
}

function attachments(n) {
  const attachments = [];

  for (let i = 1; i <= n; i++) {
    attachments.push(faker.image.abstract());
  }
  return attachments;
}

function classes(n) {
  const classes = [];

  for (let i = 1; i <= n; i++) {
    classes.push({
      id: faker.datatype.uuid(),
      name: faker.lorem.words() + '101',
      classCode: faker.random.word() + '-101',
      university: faker.address.cityName() + ' University',
      createdAt: faker.date.past(),
    });
  }
  classes.push({
    id: '621522b8-22b7-4634-befc-0a5785f53d3d',
    name: 'Test Class 101',
    classCode: 'Test-101',
    university: 'Test University',
    createdAt: '2019-01-01T00:00:00.000Z',
  });
  return classes;
}

const notifications = (n) => {
  const notifications = [];

  for (let i = 1; i <= n; i++) {
    notifications.push({
      id: faker.datatype.uuid(),
      title: faker.lorem.words(),
      user: faker.datatype.uuid(),
      seen: faker.datatype.boolean(),
      date: faker.date.past(),
      createdAt: faker.date.past(),
    });
  }
  notifications.push({
    id: '2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01',
    title: 'Welcome to Notiefi',
    user: '11118469-f8b7-4204-b1a9-b875dd5a775b',
    seen: false,
    date: '2019-01-01T00:00:00.000Z',
    createdAt: '2019-01-01T00:00:00.000Z',
  });

  return notifications;
};

module.exports = {
  users,
  notes,
  classes,
  notifications,
};
