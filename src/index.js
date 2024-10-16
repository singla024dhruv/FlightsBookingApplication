const express = require("express");
const bodyParser = require("body-parser");
//It extracts the body portion of an incoming request
// and makes it accessible under the req.body property.
const { PORT } = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json()); //Parses incoming JSON requests.
  app.use(bodyParser.urlencoded({ extended: true }));
  //------------BODYPARSER----------------
  /*extended-true:
  //option allows for parsing nested objects
  //like {
  /*key1": { "subkey": "value1" },
   
  //extended-false:
    //only supports simple, flat key-value pairs
   ---------------------------------------
    */
    
    
    
  //const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
}
setupAndStartServer();