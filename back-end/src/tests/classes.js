const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const mongoose = require('mongoose');

let classs;

chai.use(chaiHttp);
const assert = chai.assert;

describe('Classes API', () => {
  it('should create class', (done) => {
    chai
      .request(server)
      .post('/api/classes/create')
      .send({
        className: 'Test Class 101',
        classCode: 'Test-101',
        university: 'Test University',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'classCode');
        assert.property(res.body, 'university');
        assert.property(res.body, 'createdAt');
        classs = res.body._id;
        done();
      });
  });

  // it('should return all classes', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/classes')
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.isArray(res.body);
  //       assert.property(res.body[0], 'id');
  //       assert.property(res.body[0], 'name');
  //       assert.property(res.body[0], 'classCode');
  //       assert.property(res.body[0], 'university');
  //       assert.property(res.body[0], 'createdAt');
  //       done();
  //     });
  // });

  // it('should not return any classes', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/classes/1')
  //     .end((err, res) => {
  //       assert.equal(res.status, 404);
  //       assert.equal(res.text, 'Class not found');

  //       done();
  //     });
  // });

  // it('should return class by id', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/classes/' + classs)
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.property(res.body, 'id');
  //       assert.property(res.body, 'name');
  //       assert.property(res.body, 'classCode');
  //       assert.property(res.body, 'university');
  //       assert.property(res.body, 'createdAt');
  //       done();
  //     });
  // });

  // it('should delete class by id', (done) => {
  //   chai
  //     .request(server)
  //     .delete('/api/classes/621522b8-22b7-4634-befc-0a5785f53d3d')
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.equal(res.text, 'Class deleted');
  //       done();
  //     });
  // });
  // it('not find deleted class', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/classes/621522b8-22b7-4634-befc-0a5785f53d3d')
  //     .end((err, res) => {
  //       assert.equal(res.status, 404);
  //       assert.equal(res.text, 'Class not found');
  //       done();
  //     });
  // });
});
