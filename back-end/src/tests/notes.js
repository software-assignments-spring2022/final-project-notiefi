const chai = require('chai');
const chaiHttp = require('chai-http');
const { it } = require('faker/lib/locales');
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

  it('should not return any users', (done) => {
    chai
      .request(server)
      .get('api/notes/1')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');
        done();
      });
  });

  it('should create note', (done) => {
    chai
      .request(server)
      .post('api/notes/create')
      .send({
        class: 'Test 101',
        title: 'Test Note',
        user: '2005b873-dd55-4ebe-8165-76ce6d9b83a6',
        text: 'This is about test',
        comments: ['test comment 1', 'test comment 2'],
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
      })
  });

  it('should change the notes title', (done) => {
    chai   
    .request(server)
    .put('/api/notes/2005b873-dd55-4ebe-8165-76ce6d9b83a6')
    .send({
      name: 'Test2',
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.name, 'Test2');
      done();
    });
  });

});
