https = require('https');
const supertest = require("supertest");
const { compileFunction } = require('vm');
const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);

//set number of times for test to run
const runThisManyTimes = 10;

let newUser = {
  name: "Jane Doe",
  email: "jane@doe.com"
}
// for reference 
//  "user_id": "5629499534213120"
//  "conversation_id": "5720843724259328"

//There is a finite amount of correct response with chat bot
const UserResponse = [{ content: "yes" }, { content: "yes" }, { content: "no" }, { content: "19" }, { content: "84" },
{ content: "potato, to, five, javascript, week" },
{ content: "coffee, cola, juice, milk, tea, water" },
{ content: "Array, class,Date, for, function, Object, switch" },
{ content: "Montreal Canadiens" },
{ content: "Detroit Tigers" }
]


//states let us keep track of the ID's and responses
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

//sends user info over and gets the generated user id
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

//sends the generated user id over and gets a convo id
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



describe(' sending user answer', () => {

  //gets resppnse from bot
  function sendingCid() {
    it('should respond with some statements and/or questions', async () => {
      const response = await request
        .get("/challenge-behaviour/" + state.ConvoID)
        .then(data => {
          expect(data.text).toContain("a")
          state.BotQuestion = data.text;
          // console.log(data.text)
          // console.log(data.body)

        })
    })
  }

  //sends over user answer
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

  //here we send in random user answers, since each bot response has only one correct answer, we can use
  //the existing array of answers and send them randomly
  //similar as to users that type random stuff in  bot chats
  //if the answer to the current question is correct, it moves on to the next question
  let condition = 0
  while (true) {

    //gets a random number for the index
    let arrayindext = getRandomInt(0, UserResponse.length)
    sendingCid();
    sendingYN(UserResponse[arrayindext]);
    sendingCid();

    //the stop condition can also be changed to if the response contains" Thank you"
    // I tried doing it but your API locked me out for 30 seconds at a time because it is too many requests baing sent
    // back to back at once
    // I didn't want it to charge you extra
    if (condition > runThisManyTimes) {
      break;
    }

    else {
      condition++;
    }
  }


})

//random int generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randindex = Math.floor(Math.random() * (max - min)) + min;

  if (randindex >= 0 && randindex < UserResponse.length)
    return randindex

  else if (randindex < 0 || randindex == undefined || randindex >= UserResponse.length)
    return 1
}


