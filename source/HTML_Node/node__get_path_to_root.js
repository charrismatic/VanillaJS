// find events
// https://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node-when-debugging-or-from-the-javascript?rq=1


// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
function rebuild_node_html_to_root (selector) {

  var path = [];
  var el = document.getElementById(selector);;
  do {
      path.unshift(
        "<" + el.nodeName +
        (el.className ? ' class="' + el.className + '"' : '') +
        (el.id ? ' id="' + el.id + '"' : '')
      );
  } while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode));
  var html_path=path.join(">\n");
  console.log(html_path);
  return html_path;
}

rebuild_node_html_to_root("gc-wrapper");
