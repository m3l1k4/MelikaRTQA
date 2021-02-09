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
            console.log(error);
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
            console.log(error);
        })
}

getConv = (Cid) => {

    axios.get(host + '/challenge-behaviour/'+ Cid)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error);
    })
}