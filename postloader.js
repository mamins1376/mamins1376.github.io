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
  if ( posts.length <= 0 ) return;
  for (var i = 0; i < 5; i++) {
    post = (posts[i]);
    post_link = post.getElementsByClassName('post-title')[0].children[0];
    append_post(post_link);
  };
  
  var see_all = document.createElement('a');
  see_all.href = 'weblog/';
  see_all.title = 'See other posts';
  see_all.text = '...';
  append_post(see_all);

  document.getElementById('last-posts').parentNode.style.opacity = 1;
};

function append_post(post_link) {
  span = document.createElement('span');
  span.innerHTML = post_link.text.toString();
  post_link.text = '';
  post_link.classList.add('blog-link-container');
  post_link.appendChild(span)
  document.getElementById('last-posts').appendChild(post_link);
};
