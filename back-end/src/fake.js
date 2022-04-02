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

module.exports = {
  users,
  notes,
};
