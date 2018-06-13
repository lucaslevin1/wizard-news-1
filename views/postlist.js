module.exports = (posts) => {
  const getTimeForPost = (time) => {
    let now = new Date().getTime();

    if (now - time < 60000){
      return 'Just now';
    } else if (now - time < 3600000){
      return 'Between a minutes and an hour ago';
    } else if (now - time < 7200000) {
      return 'Between one and two hours ago';
    } else if (now - time < 10800000){
      return 'Between two and three hours ago';
    } else if (now - time < 86400000) {
      return 'Between three hours ago and yesterday';
    } else {
      return 'Over a day ago';
    }
  }

  return `<!DOCTYPE html>
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
            ${post.upvotes} upvotes | ${getTimeForPost(post.date)}
          </small>
        </div>`
      ).join("")}
    </div>
  </body>
</html>`

};
