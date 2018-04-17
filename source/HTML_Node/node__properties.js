
// RETURNS A SINGLE NODE
// USE WITH ELEMENTS THAT HAVE ID
function getNode(selector){
  return document.querySelector(selector);
}


function getNodeAttributes(node){
  attrs =  node.attributes;
  attrArr = {};

  [].forEach.call(attrs, function( attr ) {
      attrArr[attr.name] = attr.value;
  });

  //   console.table(attrArr);
  return attrArr;
}


function getNodeName(node){
  var id = "";
  var tagName = "";
  var nodeName = "";
  var className = "";

  tagName = node.tagName.toLowerCase();
  nodeName += tagName;

  if (node.id && node.id !==""){
    id += "#" + node.id;
    nodeName += id;
  }

  if (node.className && node.className !== ""){
    className = node.className.trim().replace(/^/,' ').replace(/\s+/g, ".");
    nodeName += className;
  }

//   console.log(id,className,tagName,nodeName );

  return {
    id: id,
    tagName: tagName,
    nodeName: nodeName,
    className: className,
  };
}


function getNodeHasPseudoElements(node) {
  return {
    has_after: getComputedStyle(node,':after').content || false ,
    has_before: getComputedStyle(node,':before').content || false,
    has_marker: getComputedStyle(node,'::marker').content || false
  }
}


function getNodeComputedStyles(node){
  return getComputedStyle(node);
}


function getNodeStyles(node){
  return node.style.cssText;
}


function getNodeCssRules(node) {

  var nodeStylesheet = [];
  var ruleArr = [];

  if (typeof(node) === "string") {
    node = document.querySelector(node);
  }


  if (node.length > 0) {
    console.error('function expecting a single node, receieved' + typeof(node));
  }

  rules = node.ownerDocument.defaultView.getMatchedCSSRules(node,'');
  [].forEach.call(rules, function( rule ) {

    ruleArr.push({
      selector:  rule.selectorText,
      cssStyle: rule.style.cssText,
    });

    nodeStylesheet.push( rule.cssText );
   });

  return {
    nodeCssRules: ruleArr,
    nodeStylesheet: nodeStylesheet
  };
}




function getNodeEventListeners(node){

  var events = getEventListeners(node)
  var eventArr = [];

  for (index in events) {
    listenType = events[index];

    for( listenNode in listenType ){
      eventListener = listenType[listenNode];

      eventArr.push({
        event_type: eventListener.type,
        event_listeners: eventListener.listener,
        event_target: eventListener.listener.elem
      });
     }
  return eventArr;
  }
}
