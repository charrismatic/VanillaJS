(() => {

  function filter_whitespace (node) {
    if ( ! /^\s*$/.test(node.data) ) {
      return NodeFilter.FILTER_ACCEPT;
    }
    else {
      return NodeFilter.FILTER_SKIP;
    }
  }

  function documentComments (rootNode) {
    if (document.createTreeWalker) {
      var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_COMMENT,
        null,
        false
      );

      var node = walker.firstChild ();
      while (node=walker.nextSibling()) {
        console.log( '<!-- ' + node.textContent + '-->\n\t' + node.nextElementSibling.outerHTML.toString().substr(0,60));
  //       console.log( '<!-- ' + node.textContent + '-->');
      }
    }
    else {
      console.log('Your browser does not support the createTreeWalker method!');
    }
  }

  var htmlRoot = document.querySelector('html');

  documentComments(htmlRoot);

})()
