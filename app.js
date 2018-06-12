const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank');

const app = express();
app.use(morgan('dev'));

//making it so everyfile loaded in public is accessible
app.use(express.static('public'))


app.get('/', (req, res) => {
  //first get the list of posts
  const posts = postBank.list();

  //then prepare some html to send as output
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/><a href='/' style='color: white'>Wizard News</a></header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span><a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join("")}
    </div>
  </body>
</html>`;

  //finally send a response
  res.send(html);
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/><a href='/' style='color: white'>Wizard News</a></header>
        <div class='news-item'>
          <p>
            ${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p class="news">
            ${post.content}
          </p>
        </div>
    </div>
  </body>
</html>`);
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

