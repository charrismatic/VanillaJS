/**
 *  append_html
 *  @param target Query selector string we want to append to
 *  @param  Html Tag name that will contain html content
 *  @param html_content Html content to be inserted
 *  @param options Accepts object for optional id and classname of the parent
 *    container.
 *
 *  // Default options
 *    options = {
 *      id: '',
 *      class: '' ,
 *      tag; 'div'
 *    }
 *
 *  @example append_html('div', "<p>Hello Content</p>", {id:'', class:'', tag:'div'})
 */
function append_html(target, html_content, options) {

  if ( ! target || target === "") {
    target = 'body';
  }

  var tagName = 'div';
  var className = '';
  var id = '';
  if (options && options !== ""){

    if (options.tag) {
      tagName = options.tag;
    }

    if (options.class){
      className = options.class;
    }

    if (options.id){
      id = options.id;
    }
  }

  var node = document.createElement(tagName);
  node.className += className;
  node.id = id;
  node.innerHTML = html_content;

  document.querySelector(target).appendChild(node);
  return true;
}
