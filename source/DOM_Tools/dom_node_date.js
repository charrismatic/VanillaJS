
function getNodeAttributes(node){
  attrs =  node.attributes;
  attrArr = {};

  [].forEach.call(attrs, function( attr ) {
      attrArr[attr.name] = attr.value;
  });

  //   console.table(attrArr);
  return attrArr;
}
