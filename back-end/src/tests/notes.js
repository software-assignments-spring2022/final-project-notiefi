const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);
const assert = chai.assert;

describe('Notes API', () => {
  it('should return all notes', (done) => {
    chai
      .request(server)
      .get('/api/notes')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.property(res.body[0], 'id');
        assert.property(res.body[1], 'class');
        assert.property(res.body[2], 'title');
        assert.property(res.body[3], 'user');
        assert.property(res.body[4], 'text');
        assert.property(res.body[5], 'comments');
        assert.property(res.body[6], 'attachments');
        assert.property(res.body[7], 'likes');
        assert.property(res.body[8], 'createdAt');
        done();
      });
  });

  it('should not return any notes', (done) => {
    chai
      .request(server)
      .get('/api/notes/1')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');

        done();
      });
  });

  it('should create note', (done) => {
    chai
      .request(server)
      .post('/api/notes/create')
      .send({
        class: 'Test 101',
        title: 'Test Note',
        user: '2005b873-dd55-4ebe-8165-76ce6d9b83a6',
        text: 'This is about test',
        comments: [
          {
            user: '021f8995-a864-4fa8-a101-6a6aa3ffd198',
            comment: 'test comment 1',
            likes: 10,
          },
          {
            user: '6d946621-602c-4b78-bcb8-71689827034b',
            comment: 'test comment 2',
            likes: 20,
          },
        ],
        attachments: ['test.jpg'],
        likes: 1,
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'id');
        assert.property(res.body, 'class');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'text');
        assert.property(res.body, 'comments');
        assert.property(res.body, 'attachments');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should change the notes title', (done) => {
    chai
      .request(server)
      .put('/api/notes/2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01')
      .send({
        title: 'Test2 Notes',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.title, 'Test2 Notes');
        done();
      });
  });

  it('should change the notes text', (done) => {
    chai
      .request(server)
      .put('/api/notes/2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01')
      .send({
        text: 'Test2 Text',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.text, 'Test2 Text');
        done();
      });
  });

  it('should return note by id', (done) => {
    chai
      .request(server)
      .get('/api/notes/2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'id');
        assert.property(res.body, 'class');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'text');
        assert.property(res.body, 'comments');
        assert.property(res.body, 'attachments');
        assert.property(res.body, 'likes');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should delete note by id', (done) => {
    chai
      .request(server)
      .delete('/api/notes/2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Note deleted');
        done();
      });
  });

  it('should not find deleted note', (done) => {
    chai
      .request(server)
      .get('/api/notes/2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');
        done();
      });
  });
});
