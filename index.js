// var isEven = require('is-even');
// let birthYear = 2001;

// let result = isEven(birthYear);
// console.log(result);


// console.log("This is being printed using node");
// console.log(`Agenda for the day
// 1. Introduction to Node
// 2. Application and Installation
// 3. Sync and Async
// 4. Non Blocking IO
// 5. repl and common commands
// `);

const http = require("http");
const app = require("./src/app.js"); // ./app.js 

const PORT = 4500;

const server = http.createServer(app); // creating server

server.listen(PORT , ()=>console.log (`server is lve on ${PORT}.Please see your application on http://localhost:${PORT}`))




// Use of Axios library
// const axios = require('axios').default;
// let url = "https://pokeapi.co/api/v2/pokemon/ditto"
// axios.get(url)
// .then((response)=>{
//     // console.log(response.data.abilities[0].ability.name);
//     // console.log(response.data.abilities[0].is_hidden);
//     // console.log(response.data.abilities[0].slot);
//     console.log("These are the abilities");
//     console.log(response.data.abilities);
//     console.log("These are the sprites");
//     console.log(response.data.sprites);

// })
// .catch((error)=>{
//     console.log(error);
// })
// .then((values)=>{
//     console.log(values);
// })
