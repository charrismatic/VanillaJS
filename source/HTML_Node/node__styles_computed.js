
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


test1 = '.container';

nd = getNode(test1);
nodes = getAll( '.container *');
getNodesAllComputedStyles(nodes);
console.log(nodes);

st = getComputedStyle( document.querySelector('.container'));

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
