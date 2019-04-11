function filter_whitespace (node) {
  if (! /^\s*$/.test(node.data)) {
    return NodeFilter.FILTER_ACCEPT;
  } else {
    return NodeFilter.FILTER_SKIP;
  }
}

function walk_document_comments (rootNode) {
  if (dom.window.document.createTreeWalker) {
    let walker = dom.window.document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_COMMENT,
        null,
        false
    );
    let node = walker.firstChild ();
    while (node) {
      console.log('<!-- ' + node.textContent + '-->');
      console.log(node.nextElementSibling);
      node = walker.nextSibling ();
    }
  } else {
    console.log('Your browser does not support the createTreeWalker method!');
  }
}
