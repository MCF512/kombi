import https from 'https'
const hostname = 'xn-----6kccjk3blftwu2p.xn--90ais';        //Change to yourdomain.com

import express from 'express'
const app = express();

import fs from 'fs'

import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

app.get("/", function (req, res) {

res.sendFile(__dirname +"/dist/index.html");
});

app.post("/mssg", function (req, res) {

console.log(req.body);

res.redirect("/");
});

const options = {
key: fs.readFileSync("ssl/privkey.pem"),                  //Change Private Key Path here
cert: fs.readFileSync("ssl/cert.pem"),            //Change Main Certificate Path here
ca: fs.readFileSync('ssl/chain.pem'),             //Change Intermediate Certificate Path here
};

https.createServer(options, app)
.listen(80, function (req, res) {                        //Change Port Number here (if required, 443 is the standard port for https)
    console.log("Server started at port 80");                //and here 
});