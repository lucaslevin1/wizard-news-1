const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank');

const app = express();
app.use(morgan('dev'));

app.get("/", (req, res) => res.send("Hello World!"));

app.get('/', (req, res) => {
  //first get the list of posts
  const posts = postBank.list();

  //then prepare some html to send as output
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
  </head>
  <body>
    <ul>
    ${posts.map(post => '<li>${}</li>')}
    </ul>
  </body>
  </html>`;

  //finally send a response
  res.send(html);
});



const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

