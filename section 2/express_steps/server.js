//STEP-11
const fs = require('fs');
const path = require('path');

//STEP 1:
//require express
//set express to variable
//use variable to listen on port
const express = require('express');
const { request } = require('http');
// STEP 4:
// add port variable and change app.listen below
const PORT = process.env.PORT || 3001;
const app = express();

// STEP 9:
// In order for our server to accept incoming data the way we need it to,
// we need to tell our Express.js app to intercept our POST request before
// it gets to the callback function. At that point, the data will be run 
// through a couple of functions to take the raw data
// transferred over HTTP and convert it to a JSON object.

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//STEP 13
//Express.js middleware that instructs the server to make 
//certain files readily available and to not gate it behind a server endpoint
app.use(express.static('public'));


//Step 2:
// pull in data
const { animals } = require('./data/animals');

//add route
// get method requires 2 arguments 
// first is a string that describes the route '/api/animals'
// second is the callback function that executes when accessed with get request
// app.get('/api/animals', (req, res) => {
//   //start with res.send('Hello!')
// //respond json file animals
//   // res.json(animals);
// });

// STEP 6:
// add function takes in the id 
// and array of animals and returns a single animal object
function findById(id, animalsArray) {
  const result = animalsArray.filter(animal => animal.id === id)[0];
  return result;
}

// STEP 10:
// we're going to create a separate function to handle taking the data 
// from req.body and adding it to our animals.json file.
function createNewAnimal(body, animalsArray) {
  console.log(body);
  //step 10.3 Now when we POST a new animal,
  // we'll add it to the imported animals array from the animals.json file.
   const animal = body;
  animalsArray.push(animal);

// step 11.1
// We want to write to our animals.json file in the data subdirectory,
// so we use the method path.join() to join the value of __dirname,
// which represents the directory of the file we execute the code in,
// with the path to the animals.json file
  fs.writeFileSync(
    path.join(__dirname, './data/animals.json'),
    //The null argument means we don't want to edit any of our existing data;
    //if we did, we could pass something in there.The 2 indicates we want to
    //create white space between our values to make it more readable. 
    JSON.stringify({ animals: animalsArray }, null, 2)
  );
  return animal;


  // // step 10 return finished code to post route for response
  // return body;
}

// STEP 3:
// try query property
app.get('/api/animals', (req, res) => {
  let results = animals;
  console.log(req.query)
  res.json(results);
});

// STEP 5:
// Get one animal by id
//return error if id doesnt exist
app.get('/api/animals/:id', (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// STEP 8
// add post request
app.post('/api/animals', (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body);

    // step 10.1 set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

    // step 10.2 add animal to json file and animals array in this function
  const animal = createNewAnimal(req.body, animals);

  res.json(req.body);
});


//STEP 12 front end stuff
// '/' brings us to the root route of the server! used to create a homepage for a server
// this GET route has just one job to do, and that is to respond with an HTML page to display in the browser.
// we're using res.sendFile(), and all we have to do is tell them where to find 
// the file we want our server to read and send back to the client.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// STEP 15:
app.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './public/animals.html'));
});

//Step 15.1
//The * will act as a wildcard, meaning any route that wasn't previously
//defined will fall under this request and will receive the homepage as 
//the response. The * route should always come last
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});