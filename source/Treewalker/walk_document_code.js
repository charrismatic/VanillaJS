(() => {


  function mdHeading (hTag) {
    var index = parseInt( hTag[1]);
    indentation = "";
    for (var i=0; i<index; i++){
      indentation = indentation + "#";
    }
    return indentation + " ";
  }

  function filter_code (node) {
    var tag = node.tagName.toLowerCase();
    var accepted = ['pre','code','h2','h3','h4','h5','h6'];
    // var rejected = [];
    // if (rejected.indexOf(tag) >= 0 ) {
    // return NodeFilter.FILTER_REJECT;
    // }
    if (accepted.indexOf(tag) >= 0 ) {
      return NodeFilter.FILTER_ACCEPT;
    } else {
      return NodeFilter.FILTER_SKIP;
    }
  }

  function scrape_code_snippets (node_root) {
    if (document.createTreeWalker) {
      walker = document.createTreeWalker(
        node_root,
        NodeFilter.SHOW_ELEMENT,
        filter_code,
        false
      );

      // get the first matching node
      var node = walker.firstChild ();

      while (node) {
        if (node.nodeName === 'pre') {
          console.log( '```\n' + node.textContent + '\n```\n\n');
        } else {
          console.log(mdHeading(node.nodeName) + node.textContent.trim());
          console.log(mdHeading(node.nodeName) + node.textContent.trim());
        }

        node = walker.nextSibling();
      }

    } else {
      console.log("Your browser does not support the createTreeWalker method!");
    }
  }

  var rootNode = document.querySelector('body');
  scrape_code_snippets(rootNode);

})()
