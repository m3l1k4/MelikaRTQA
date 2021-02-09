https = require('https');

const supertest = require("supertest");
const { compileFunction } = require('vm');

const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);

let newUser = {
  name: "Jane Doe",
  email: "jane@doe.com"
}

let yesRes = {
  content: "yes"
}

let noRes = {
  content: "no"
}

state = {
  UserID: [],
  ConvoID: [],
  BotResponse: []
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


describe('sending conversation ID', () => {
  // it('should respond with some statements', async () => {
  //   const response = await request
  //     .get("/challenge-behaviour/" + state.ConvoID)
  //     .then(data => {
  //       expect(data.text).toContain("?")
  //       // console.log(data.text)

  //     })
  // })

  ChatBotResponse(state.ConvoID)
})

function ChatBotResponse(conversationID){
    it('should respond with some statements', async () => {
    const response = await request
      .get("/challenge-behaviour/" + state.ConvoID)
      .then(data => {
        expect(data.text).toContain("?")
        // console.log(data.text)

      })
  })

  return
}

// describe(' sending an answer', async () => {
//   it('should respond with true or false', async () => {
//     const response = await request
//       .post("/challenge-behaviour/" + state.ConvoID)
//       .send( yesRes)
//       .then(data => {
//         expect(data.text).toContain("correct")
//         // console.log(data.body.correct)
//         state.BotResponse=data.body.correct

//       })
//   })
// })


// describe(' sending an answer', async () => {
//   itif(state.BotResponse==true)('should respond with true or false', async () => {
//     const response = await request
//       .post("/challenge-behaviour/" + state.ConvoID)
//       .send( yesRes)
//       .then(data => {
//         expect(data)
//         console.log(data.body)

//       })
//   })
// })
