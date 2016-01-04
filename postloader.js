function load_posts() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    var DONE = this.DONE || 4;
    if (this.readyState === DONE) {
      var resp = request.responseText;
      var type = request.responseType || 'text/html';
      var parser = new DOMParser();
      var dom = parser.parseFromString(resp, type);
      insert_posts(dom)
    };
  };
  request.open('GET', 'http://mamins1376.github.io/weblog/', true);
  request.send(null);
};

function insert_posts(doc) {
  var posts = doc.getElementsByTagName('article');
  var container = document.getElementById('last-posts');
  for (var i = 0; i < 5; i++) {
    post = (posts[i]);
    post_link = post.getElementsByClassName('post-title')[0].children[0];
    container.appendChild(post_link);
  };
  container.parentNode.style.display = 'block';
  container.parentNode.style.opacity = 1;
};
