'use strict';
const {app} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const { db } = require('../src/models/index');
// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
  });
  // after all the tests are done
afterAll(async () => {
    await db.drop();
  });
  

describe('server testing', () => {

  test('check for signup', async () => {
      const respons = await mockRequest.post('/signup').send({
          username: "john",
          password: "foo"
      });
      expect(respons.status).toBe(201)
      
  });
  
 
  test('check if signing  with user name not found ', async () => {
      const respons = await mockRequest.post('/signin').auth('user', 'pw');
      expect(respons.status).toBe(403)

  });
  test('check if signing is work fine when pw', async () => {
      const user = await mockRequest.post('/signup').send({
          username: "admin",
          password: "admin"
      });
      const respons = await mockRequest.post('/signin').auth(user.body.username,'admin')
      expect(respons.status).toBe(200)


  });
  
  test('check if signing is work fine when pw', async () => {
    const user = await mockRequest.post('/signup').send({
        username: "admin",
        password: "admin"
    });
    const respons = await mockRequest.post('/signin').auth(user.body.password,'err')
    expect(respons.status).toBe(403)


});




})