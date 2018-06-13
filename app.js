const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank');
const indexhtml = require('./views/postlist');
const onePost = require('./views/onepost');

const app = express();
app.use(morgan('dev'));

//making it so everyfile loaded in public is accessible
app.use(express.static('public'))


app.get('/', (req, res) => {
  //first get the list of posts
  const posts = postBank.list();
  //finally send a response
  res.send(indexhtml(posts));
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send(onePost(post));
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

