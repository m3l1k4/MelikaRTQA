const supertest = require("supertest");

const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);

// This is a sample test to help you get started. You can remove it if you would like.
describe('Test the root path', () => {
  it('It should return 302 for the GET method', async () => {
    const response = await request.get('/')
    expect(response.statusCode).toBe(302)
  })
});