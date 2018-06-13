module.exports = (post) => {return `<!DOCTYPE html>
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
</html>`};
