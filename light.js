function init_light() {
  var light_node = document.getElementsByClassName('site-title')[0].getElementsByTagName('h1')[0];
  turn_light_off(light_node);
};

function turn_light_on(light_node) {
  if (light_node.classList.contains('turned-off')) light_node.classList.remove('turned-off');
  if (!light_node.classList.contains('turned-on')) light_node.classList.add('turned-on');
  window.setTimeout(turn_light_off, random_delay(), light_node);
};

function turn_light_off(light_node) {
  if (light_node.classList.contains('turned-on')) light_node.classList.remove('turned-on');
  if (!light_node.classList.contains('turned-off')) light_node.classList.add('turned-off');
  window.setTimeout(turn_light_on, random_delay(), light_node);
};

function random_delay() {
  var normal = 1000, radius = 700;

  var min = normal - radius, max = normal + radius;
  return Math.random() * (max - min) + min;
};
