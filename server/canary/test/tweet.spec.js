const request = require('supertest'); 
const server = require('../index');

describe('Create tweet endpoint', () => {
  it('should return an error, if body is empty', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/create')
      .send({})
    expect(res.statusCode).toEqual(400);
    done();
  });

  it('should return an error, if decode_token header is empty', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/create')
      .send({
        tweet: 'first tweet',
      });
    expect(res.statusCode).toEqual(500);
    done();
  });

  it('should create tweet successfully', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/create')
      .set('decoded_token', JSON.stringify({id: 1}))
      .send({
        tweet: 'first tweet',
      });
    expect(res.statusCode).toEqual(201);
    done();
  });

});


describe('Delete tweet endpoint', () => {
  it('should return an error, if param is not a numeric value', async (done) => {
    const res = await request(server)
      .delete('/api/v1/tweet/delete/NaN')
      .send({})
    expect(res.statusCode).toEqual(400);
    done();
  });

  it('should return an error, if decode_token header is empty', async (done) => {
    const res = await request(server)
      .delete('/api/v1/tweet/delete/1')
      .send({});
    expect(res.statusCode).toEqual(500);
    done();
  });

  it('should return an error, if user id is different from user that created the tweet', async (done) => {
    const res = await request(server)
      .delete('/api/v1/tweet/delete/1')
      .set('decoded_token', JSON.stringify({id: 10}))
      .send({});
    expect(res.statusCode).toEqual(404);
    done();
  });

  it('should create tweet successfully', async (done) => {
    const res = await request(server)
      .delete('/api/v1/tweet/delete/1')
      .set('decoded_token', JSON.stringify({id: 1}))
      .send();
    expect(res.statusCode).toEqual(204);
    done();
  });

});


describe('Retweet endpoint', () => {
  it('should return an error, if param is not a numeric value', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/retweet/NaN')
      .send({})
    expect(res.statusCode).toEqual(400);
    done();
  });

  it('should return an error, if decode_token header is empty', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/retweet/1')
      .send({});
    expect(res.statusCode).toEqual(500);
    done();
  });

  it('should return an error, if tweet does not exist', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/retweet/1000')
      .set('decoded_token', JSON.stringify({id: 10}))
      .send({});
    expect(res.statusCode).toEqual(404);
    done();
  });

  it('should create tweet successfully', async (done) => {
    const res = await request(server)
      .post('/api/v1/tweet/retweet/2')
      .set('decoded_token', JSON.stringify({id: 1}))
      .send();
    expect(res.statusCode).toEqual(201);
    done();
  });

});


describe('single tweet endpoint', () => {
  
  it('should retrieve tweeet successfully', async (done) => {
    const res = await request(server)
      .get('/api/v1/tweet/2')
      .set('decoded_token', JSON.stringify({id: 1}))
      .send();
      console.log(res);
    expect(res.statusCode).toEqual(200);
    done();
  });

});
