const request = require('supertest'); 
const server = require('../index');

describe('Create user endpoint', () => {
  it('should return an error', async (done) => {
    const res = await request(server)
      .post('/api/v1/auth/register')
      .send({})
    expect(res.statusCode).toEqual(400);
    done();
  });

  it('should be successful', async (done) => {
    const res = await request(server)
      .post('/api/v1/auth/register')
      .send({
        email: 'test@gmail.com', 
        password: 'test',
      });
    expect(res.statusCode).toEqual(201);
    done();
  });
});

describe('Log in endpoint', () => {
  it('should return an error', async (done) => {
    const res = await request(server)
      .post('/api/v1/auth/login')
      .send({})
    expect(res.statusCode).toEqual(400);
    done();
  });

  it('should be successful', async (done) => {
    const res = await request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@gmail.com', 
        password: 'test',
      });
    expect(res.statusCode).toEqual(200);
    done();
  });
});