https = require('https');

const supertest = require("supertest");
const { compileFunction } = require('vm');

const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);

let newUser = {
  name: "Jane Doe",
  email: "jane@doe.com"
}
//   "user_id": "5629499534213120"
//  "conversation_id": "5720843724259328"
const UserResponse = [{ content: "yes" }, { content: "no" }, { content: "19" }, { content: "84" },
{ content: "potato, to, five, javascript, week" },
{ content: "coffee, cola, juice, milk, tea, water" },
{ content: "Array, class,Date, for, function, Object, switch" },
{ content: "Montreal Canadiens" }
]



state = {
  UserID: [],
  ConvoID: [],
  BotResponse: [true],
  BotQuestion: []
}

const itif = (condition) => condition ? it : it.skip;


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
      .send(
        newUser
      )
      .then(data => {
        expect(data.text).toContain("user_id")
        state.UserID = data.body;
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
        // console.log(data.body)

      })
  })
})



describe(' sending first answer', () => {

  function sendingCid() {
    it('should respond with some statements', async () => {
      const response = await request
        .get("/challenge-behaviour/" + state.ConvoID)
        .then(data => {
          expect(data.text)
          state.BotQuestion = data.text;
          console.log(data.text)
          // console.log(data.body)

        })
    })
  }

  function sendingYN(myAnswer) {
    it('should respond with true or false', async () => {
      const response = await request
        .post("/challenge-behaviour/" + state.ConvoID)
        .send(myAnswer)
        .then(data => {
          expect(data.text).toContain("correct")
          state.BotResponse = data.body.correct
        })
    })
  }

  if (state.BotResponse) { console.log("potato") }
  let condition = 0
  while (true) {
    
    sendingCid();
    sendingYN(UserResponse[Math.floor(Math.random() * UserResponse.length)]);
    sendingCid();
    sendingYN(UserResponse[Math.floor(Math.random() * UserResponse.length)]);
    
    // let str = state.BotQuestion
    // let condition = str.includes("baseball", 1);
    if (condition > 10) {
      break;
    }

    else{
    condition++;}
  }


})

