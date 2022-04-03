const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);
const assert = chai.assert;

const testId = '2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01';

describe('Notifications API', () => {
  it('should return all notifications', (done) => {
    chai
      .request(server)
      .get('/api/notifications')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.property(res.body[0], 'id');
        assert.property(res.body[1], 'title');
        assert.property(res.body[2], 'user');
        assert.property(res.body[3], 'seen');
        assert.property(res.body[5], 'date');
        assert.property(res.body[5], 'createdAt');
        done();
      });
  });

  it('should not return any notifications', (done) => {
    chai
      .request(server)
      .get('/api/notifications/1')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Notification not found');

        done();
      });
  });

  it('should create a notification', (done) => {
    chai
      .request(server)
      .post('/api/notifications')
      .send({
        title: 'Test Notification',
        user: 'Test',
        date: '2022-01-01T00:00:00.000Z',
      })
      .end((err, res) => {
        assert.equal(res.status, 201);
        assert.property(res.body, 'id');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'seen');
        assert.property(res.body, 'date');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should return notification by id', (done) => {
    chai
      .request(server)
      .get(`/api/notifications/${testId}`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'id');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'seen');
        assert.property(res.body, 'date');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should delete notification by id', (done) => {
    chai
      .request(server)
      .delete(`/api/notifications/${testId}`)
      .end((err, res) => {
        assert.equal(res.status, 204);
        done();
      });
  });
  it('not find deleted notification', (done) => {
    chai
      .request(server)
      .get(`/api/notifications/${testId}`)
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Notification not found');
        done();
      });
  });
});
