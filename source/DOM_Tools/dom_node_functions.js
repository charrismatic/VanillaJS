
var get_outline_item_text = function (section_index, item_index, data) {
  // var outline_string = '' + get_item_label(section_index, item_index) + "  " + get_tag(data) + ". " + get_txt(data);
  var outline_string = '' + get_tag(data) + ". " + get_txt(data);
  return outline_string;
}
var get_outline_url = ()=>{ return location.href; }
var get_outline_title = ()=>{ return document.title; }

var new_section = ()=>{
  section = section + 1;
  item_index = 1;
}
var get_node_data = (node) => {
  return{
    section: get_section_index(),
    index: get_item_index(),
    tag: get_tag(cur_node),
    content: get_txt(cur_node),
    element: node
  };
}

var get_outline_item_text = function(section_index, item_index, data) {
  var outline_string = '' +
    get_item_label(section_index, item_index) +
    "  " +
    get_tag(data) + ". " +
    get_txt(data);
  return outline_string;
}
var get_outline_url = () => { return location.href; }
var get_outline_title = () => { return document.title; }

// FORMATTERS AND DISPLAY  OUTPUT
// var get_item_label = (section_index,item_index)=>{
var get_item_label = (section_index,item_index)=>{
  return [section_index, item_index].join('-');
}
var get_txt = (node)=>{ return node.innerText; }
var get_tag = (node)=>{ return node.nodeName.toUpperCase(); }
function getObjectPath (path) { return (path.length === 0) ? path : ['children'].concat(path.join('.children.').split('.')); }
function getLevel (node) { return parseInt(node.tagName.slice(1), 10); }
function get (object, path) {
  return path.reduce(function(prev,curr){ return prev[curr]; }, object);
}

function indent (hTag) {
  let index = parseInt( hTag[1]);
  let indentation = '';
  for (let i=0; i<index; i++){
    indentation = indentation + '  ';
  }
  return indentation;
}

// --------------------------
get_node_data_object(node){
  return {
    section: //parent section,
    index: // section_index,
    tag: get_tag(next_node),
    content: get_txt(next_node),
    element: node,
    classList: false,
    id: false,
  }
}

function filter_heading (node) {
  let tag = node.tagName.toLowerCase();
  let accepted = ['h1','h2','h3','h4','h5','h6'];
  let rejected = ['footer','header','nav','aside'];
  if (rejected.indexOf(tag) >= 0 ) { return NodeFilter.FILTER_REJECT; }
  else if (accepted.indexOf(tag) >= 0) { return NodeFilter.FILTER_ACCEPT; }
  else { return NodeFilter.FILTER_SKIP; }
}

function add_outline_header(){
  let sp=" ";
  let br="\n";
  let title=br+"title:"+sp;
  let url_label="url:"+sp;
  let header="---"+br+"Document Outline:"+br+"=================";
  outline.push(title+document.title);
  outline.push(url_label+location.href);
  outline.push(header);
};

// COMPARE RELATIVE POSITION FOR OUTLINE ORDER
// ARE TWO NODES SIBLINGS UNDER CURRENT BRANCH ROOT
const compare_position = (nodeA, nodeB) => {
  //  1     DOCUMENT_POSITION_DISCONNECTED
  //  2     DOCUMENT_POSITION_PRECEDING
  //  4     DOCUMENT_POSITION_FOLLOWING
  //  8     DOCUMENT_POSITION_CONTAINS
  //  16    DOCUMENT_POSITION_CONTAINED_BY
  //  32    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
  let pos_check = nodeA.compareDocumentPosition(nodeB);
  // console.log( nodeA,  pos_check ,  nodeB );
  if (pos_check === Node.DOCUMENT_POSITION_DISCONNECTED) { return false; }
  if (pos_check === Node.DOCUMENT_POSITION_CONTAINS) { return 'parents'; }
  if (pos_check === Node.DOCUMENT_POSITION_CONTAINED_BY) { return 'child'; }
  if (pos_check === 20) { return 'child'; } // IS PARENT && FOLLOWING
  if (pos_check === Node.DOCUMENT_POSITION_FOLLOWING) { return 'sibling_after'; }
  if (pos_check === Node.DOCUMENT_POSITION_PRECEDING) { return 'sibling_before'; }
  return false;
};

node_report (current_root, blocks) {
  // DIVIDE DOCUMENT INTO BLOCK LEVEL GROUPS
  var disconnected = [];
  var children = [];
  var parents = [];
  var siblings = [];
  var remains = [];
  //   console.log("TESTING ", current_root, blocks);
  blocks.forEach(function(block){
    var related = compare_position(current_root, block);
    // DISCONNECTED
    if (related === false) {
      disconnected.push(block);
      remains.push(block);
    }
    else if (related === 'parent' ) {
      // NOT PART OF CURRENT GROUP
      // WILL BE THE BECOME CURRENT ROOT FOR THE NEXT ITERATION
      parents.push(block);
      remains.push(block);
    }
    else if (related === 'child'){children.push(block)}
    else if (related === 'sibling_after' ) {
      siblings.push(block);
      remains.push(block);
    }
    else if (related === 'sibling_before' ) {
      siblings.unshift(block);
      remains.push(block);
    }
  });

  return {
    node: current_root,
    children: children,
    parents: parents,
    siblings: siblings,
    disconnected: disconnected,
    remaining: remains
  }
};
