https = require('https');

const supertest = require("supertest");
const { compileFunction } = require('vm');

const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);

$BASE_URL = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net"
let newUser = {
  name: "Jane Doe",
  email: "jane@doe.com"
}


state = {
  UserID: [],
  ConvoID: [],
  response: []
}


let convo = {
  content: "yes"
}



// This is a sample test to help you get started. You can remove it if you would like.
describe('Test the root path', () => {
  it('It should return 302 for the GET method', async () => {
    const response = await request.get("/")
    // expect(response.statusCode).toBe(302)
    expect(response)

  })
});

describe('sending user info', () => {
  it('should respond with userID', async () => {
    const response = await request
      .post("/challenge-register")
      .send({
        name: "Jane Doe",
        email: "jane@doe.com"
      })
      .then(data => {
        expect(data.text).toContain("user_id")
        state.UserID = data.body;
        // console.log(data.body.user_id)
        // console.log(state.UserID)
      })
  })
})

describe('sending user id', () => {
  it('should respond with convo id', async () => {

    const response = await request
      .post("/challenge-conversation")
      .send(
        state.UserID
      )
      .then(data => {
        expect(data.text).toContain("conversation_id")
        state.ConvoID = data.body.conversation_id;
        console.log(data.body)

      })
  })
})


describe('sending conversation ID', () => {
  it('should respond with some statements', async () => {
    const response = await request
      .get("/challenge-behaviour/"+state.ConvoID)
      .then(data => {
        expect(data.text).toContain("?")
        // state.ConvoID = data.body;
        console.log(data.text)

      })
  })
})

// it('testing to sign up feature', async (done) => {
//   const f = await request(app)
//       .post('/signUp')
//       .send({body:{a:1, b:3}});
//   expect(JSON.parse(f.text)).toEqual({ message: 'user created successfully', status: 200 });
//   done();
// });
// postUserInfo = () => {

//   axios.post(host + '/challenge-register', newUser)
//       .then(response => {
//       let userID = response.data
//           PostConvoInfo(userID)
//       })
//       .catch(error => {
//           // console.log(error);
//       })
// }



// Request:

// ```bash
// curl --request POST \
//   --url $BASE_URL/challenge-register \
//   --header 'content-type: application/json' \
//   --data '{
//   "name": "Jane Doe",
//   "email": "jane@doe.com"
// }'
// ```

// Response:

// ```json
// {
//   "user_id": "<YOUR USER ID>"
// }
// ```

// describe('test post request', () => {
//   it('should return strng', async () => {
//     const response = await request.post('/challenge-register ',
//       {
//         name: "Jane Doe",
//         comment: "jane@doe.com"
//       })
//       .then(response => {
//         console.log(response)
//       })
//       .catch(error => {
//         console.log(error);
//       })


//     expect(response.statusCode).toBe(302)
//   })
// })