const faker = require('faker');

const profilePic = [
    user = faker.datatype.uuid(),
    id = faker.datatype.uuid(),
    url = faker.internet.url(),
    createdAt = faker.internet.past(),
    description = faker.lorem.sentence(),
];
module.exports = {
    get: (req, res) => {
        res.send(profilePic);
    }, 

    post: (req, res) => {
        const p = {
            user: faker.datatype.uuid(),
            id: faker.datatype.uuid(),
            url: faker.internet.url(),
            createdAt: faker.internet.past(),
            description: faker.lorem.sentence(),
        }
        res.status(201).send(p);
    },  
};



