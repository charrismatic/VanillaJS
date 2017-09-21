
function getNode(selector){
  document.querySelector(selector);
}

function getAll(selector){
  document.querySelectorAll(selector);
}

// function getAllFromNode(node,selector){ 
//   node.querySelectorAll(selector);
// }

function getNodeComputedStyles(node){
  // TODO- ERROR HANDLING / MESSAGE FEEDBACK / FILTER
  return getComputedStyle(node);
}

function getNodesAllComputedStyles(nodes){
  styleArr=[];
  
  console.log(nodes);

  for( var i in nodes){

    if (style=getNodeComputedStyles( nodes[i] )){
      styleArr.push( style );
    }    
  }
  return styleArr;
}


test1 = '.mobile-menu';


nd = getNode(test1);
nodes = getAll( '.mobile-menu *');
getNodesAllComputedStyles(nodes);
console.log(nodes);

st = getComputedStyle( document.querySelector('.mobile-menu'));


dir(st);
st.cssText
JSON.stringify(st);

for( var i in st ){
  arr=[];

  console.log(i, st[i]);
  arr.push(i);
  arr.push(':');
  arr.push(st[i]);
  arr.push('\r\n');
}

copy( st.cssText.split(';').join('\r\n') );