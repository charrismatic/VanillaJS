
function filter_code (node) {
  var tag = node.tagName.toLowerCase();
  var accepted = ['pre','h2','h3','h4','h5','h6'];
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

function headingFilter (node) {
  var tag = node.tagName.toLowerCase();
  var accepted = ['h1','h2','h3','h4','h5','h6'];
  var rejected = ['footer','header','nav','aside'];

  if (rejected.indexOf(tag) >= 0 ) {
    return NodeFilter.FILTER_REJECT;
  } else if (accepted.indexOf(tag) >= 0 ) {
    return NodeFilter.FILTER_ACCEPT;
  } else {
    return NodeFilter.FILTER_SKIP;
  }
}

function filter_whitespace (node) {
  if ( ! /^\s*$/.test(node.data) ) {
    return NodeFilter.FILTER_ACCEPT;
  }
  else {
    return NodeFilter.FILTER_SKIP;
  }
}
