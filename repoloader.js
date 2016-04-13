function load_repos() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    var DONE = this.DONE || 4;
    if (this.readyState === DONE) {
      var resp = request.responseText;
      var type = request.responseType || 'text/html';
      var parser = new DOMParser();
      var dom = parser.parseFromString(resp, type);
      extract_info(dom)
    };
  };
  request.open('GET', 'https://github.com/mamins1376?tab=repositories', true);
  request.setRequestHeader('Origin', 'https://github.com/');
  request.send(null);
};

function extract_info(doc) {
  var dom_repo_names = doc.getElementsByClassName('repo-list-name');
  var dom_repo_descs = doc.getElementsByClassName('repo-list-description');
  if ( dom_repo_names.length <= 0 ) return;
  for (var i = 0; i < Math.min(5, dom_repo_names.length); i++) {
    var info = info_from_dom(dom_repo_names[i], dom_repo_descs[i]);
    insert_info(info[0], info[1], info[2]);
  };

  insert_info('All projects...', 'all of my projects, at once!',
      'https://github.com/mamins1376?tab=repositories');

  document.getElementById('projects').parentNode.style.opacity = 1;
};

function info_from_dom(dom_repo_name, dom_repo_desc) {
  var repo_name = String(dom_repo_name.children[0].innerText),
  repo_link = String(dom_repo_name.children[0].href),
  repo_link = String(dom_repo_desc.innerText);
  return [repo_name, repo_desc, repo_link];
};

function insert_info(repo_name, repo_desc, repo_link) {
  var project = document.createElement('a');
  project.classList.add('project');
  project.href = repo_link;

  var project_name = document.createElement('span');
  project.classList.add('project-name');
  project_name.innerText = repo_name;

  var project_desc = document.createElement('span');
  project.classList.add('project-desc');
  project_name.innerText = repo_desc;

  document.getElementById('projects').appendChild(project);
};
