const faker = require('faker');

function users(n) {
    let users = [];
    
    for (let i = 1; i <= n; i++){
        users.push({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            university: faker.address.cityName()+' University',
            email: faker.internet.email(),
            password: faker.internet.password(),
            createdAt: faker.date.past(),
        });
    }
    users.push({
        id: "2005b873-dd55-4ebe-8165-76ce6d9b83a6",
        name: "Test",
        university: "Test University",
        email: "test@test.com",
        password: "test",
        createdAt: "2019-01-01T00:00:00.000Z",
    });
    return users;
}

module.exports = {
    users
};
