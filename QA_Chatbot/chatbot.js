// import axios from "axios";
const axios = require('axios').default;
console.log("potato")

const supertest = require("supertest");

const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);


let newUser = {
    name: "Jane Doe",
    email: "jane@doe.com"
}



let convo = {
    content: "yes"
}



getInfo = () => {
    axios.get(host)
        .then(response => {

            // console.log(response);
            console.log("poot")


        })
};

getInfo();

postUserInfo = () => {

    axios.post(host + '/challenge-register', newUser)
        .then(response => {
        let userID = response.data
            PostConvoInfo(userID)
        })
        .catch(error => {
            // console.log(error);
        })
}

 postUserInfo();


PostConvoInfo= (Uid) => {

    console.log(Uid, "usr id")
    axios.post(host + '/challenge-conversation', Uid)
        .then(response => {
            let convID=response.data.conversation_id
             getConv(convID)
           
        })
        .catch(error => {
            // console.log(error);
        })
}

getConv = (Cid) => {

    axios.get(host + '/challenge-behaviour/'+ Cid)
    .then(response => {
        console.log(response.data);
     postResponse(Cid);
    })
    .catch(error => {
        // console.log(error);
    })
}

postResponse = (convoID) => {

    // const convoID='5742897156587520';
    const content = {
        "content": "yes"
      }
    console.log(convoID, "convo id")
    axios.post(host + '/challenge-behaviour/'+ convoID, content)
        .then(response => {
         console.log(response.data.correct)

        //  if (response.data.correct=true){
        //      getConv(convoID)
        //  }
           
        })
        .catch(error => {
            // console.log(error);
        })
}

postResponse();