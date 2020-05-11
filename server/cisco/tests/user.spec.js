const request = require('supertest'); 
const server = require('../index');

describe('user details endpoint', () => {

  it('should be successful, if user exists', async (done) => {
    const res = await request(server)
      .get('/api/v1/user/1')
      .send({});
    expect(res.statusCode).toEqual(200);
    done();
  });

  it('should be unsuccessful, if userId is not a number', async (done) => {
    const res = await request(server)
      .get('/api/v1/user/NaN')
      .send({});
    expect(res.statusCode).toEqual(400);
    done();
  });

  it('should be unsuccessful, if user doesn\'t exist', async (done) => {
    const res = await request(server)
      .get('/api/v1/user/200')
      .send({});
    expect(res.statusCode).toEqual(404);
    done();
  });
});