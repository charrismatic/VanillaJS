// for ( prop in nodes[0]) { console.log(prop) }
// for ( prop in nodes[0]) { console.log(this) }
// for ( prop in node) { console.log(prop, this.value) }

// ARRAY METHODS FOREACH

// [].forEach.call(items, function( at ) { console.log( at.name, at.value ) })
// [].forEach.call(nodes, function(nodes,index){ });
// attrs.forEach(function(attr) {}  * does not work with non array types



// RETURNS A SINGLE NODE 
// USE WITH ELEMENTS THAT HAVE ID
function getNode(selector){
  return document.querySelector(selector);
}




function getAllNodes(selector){
 
  nodes = document.querySelectorAll(selector);
  if (nodes.length > 1000) {
    console.warn("Query string returned more than 1000 nodes. Try a something more specific, until the filtering feature is completed");
    console.warn(selector, nodes.length);
    return false;
  } 
  return nodes;
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


//getMatchedCSSRules
function getNodeCssRules(node) {
  
  if (typeof(node) === "string") {
    node = document.querySelector(node);
  }  

  ruleArr = [];
 
  rules = node.ownerDocument.defaultView.getMatchedCSSRules(node,'');
  for( rule of rules){
    ruleArr.push({
      selector :  rule.selectorText,
      cssText : rule.cssText
    });   
  };
  

  // console.table(ruleArr);
  return ruleArr;
}




// GET ALL CHILD CLASSES FROM NODE
function getNodeChildClasses(selector){

  // DO THE FIRST QUERY
  if (typeof(parents) === "string") {
    parents =  getNodeFromSelector(parents)
  } 

  var classArr = new Array();
  var children = document.querySelectorAll(selector);
  children.forEach(function(child){

    if (child.className && child.className!==""){
      childClassArr = child.className
        .trim()
        .replace(/\s\s+/," ")
        .split(" ");
    }

    // ES6 CONCAT
    classArr = [...new Set([...childClassArr, ...classArr])];
  });
  
  return classArr.sort().join(",");
}



// GET LIST OF UNIQUE TAGS ON PAGE
function getAllUniqueTags() {
  var tagArr = new Array();
  nodeList = document.querySelectorAll('*');
  nodeList.forEach(function(node) {
    tagArr = [...new Set([...tagArr, node.tagName])];
  });

  return tagArr.sort().join(",").toLowerCase();
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



/// GET ALL UNQIUE DOM ELEMENTS FROM A 
// PARENT NODE
function getUniqueFromNode(_node) {
 
  var id_list= [];  
  var tag_list = []; 
  var node_list = []; 
  var class_list = [];

  if (typeof(_node) === "string") {
    _node = document.querySelector(_node);
  }  
  
  node0 = getNodeName(_node);

  var root_node = {
    id: node0.id,
    tagName: node0.tagName, 
    nodeName: node0.nodeName, 
    className: node0.className,
  }
  
  nodes = _node.querySelectorAll('*');
  
  nodes.forEach(function(_node) {
   
    data = getNodeName(_node);
        
    if ( data.id ) { id_list = [...new Set([...id_list, data.id ])]; }
    
    if ( data.tagName ) {tag_list = [...new Set([...tag_list, data.tagName ])] }
    
    if ( data.nodeName ) { node_list  = [...new Set([...node_list, data.nodeName ])]; }
    
    if ( data.className ) { class_list = [...new Set([...class_list, data.className ])]; }
  });

  id_list.sort().join(",");
  tag_list.sort().join(",");
  node_list.sort().join(",");
  class_list.sort().join(",");

  return {
    rootNode: root_node,
    id_list : id_list,
    tag_list : tag_list,
    node_list : node_list,
    class_list : class_list 
  }
}


// GET ARRAY OF CHILD ELEMENTS FROM SELECTOR 
// HAVING ATTRIBUTE X
// RETURN CHILD NODE SELECTOR, VALUE
// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];


function getAllAtributeXFromY(parents, attr) {
  var childAttrArr,
      parentArr = []; 
  var nodeAttr = {};
  var nodeName;

  // DO THE FIRST QUERY
  if (typeof(parents) === "string") {
    parents =  getNodeFromSelector(parents)
  } 
      
  for (var parent of parents) {
    if(parent.children.length > 0) {
      childAttrArr = getAllAtributeXFromY(parent.children, attr);
    } 

    nodeName = parent.tagName.toLowerCase();
    if (parent.id) { nodeName += "#" + parent.id; }
    if (parent.className) { nodeName += parent.className.trim().replace(/^/,' ').replace(/\s+/g, "."); }
    
    nodeAttr = { 
      'css': parent.style.getPropertyValue(attr), 
      'node': nodeName, 
      ':hover': getComputedStyle(parent,":hover").getPropertyValue(attr),
      ':before': getComputedStyle(parent,":before").getPropertyValue(attr),
      ':after': getComputedStyle(parent,":after").getPropertyValue(attr),
      [attr]: getComputedStyle(parent).getPropertyValue(attr),
    };

     parentArr =  parentArr.concat(nodeAttr);
  }

  return parentArr.concat(childAttrArr);
}




// function getAllFromNode(node, getHtml = false) {
  
//   // ONLY VALUES FROM FIRST ROUND WILL
//   // BE HELD HERE UNTIL THE END OF THE CYCLE
//   // SO THE RETURN ROOT ELEMENT HAS TOP LEVEL INFO 
//   var nodeRoot = {};

//   var childNode = {};
//   var cloneNode = []; 

//   // CALLED FUNCTION WITH SELECTOR VS NODE
//   if (typeof(node) === "string") {
//     node = getNode(node);
//     getHtml = true;
//   }

//   if (getHtml === true){
    
//     node0 = getNodeName(node);

//     var root_node = {
//       id: node0.id,
//       tagName: node0.tagName, 
//       nodeName: node0.nodeName, 
//       className: node0.className,
//       outerHTML: node.outerHTML,
//       attributes: getNodeAttributes( node ),
//     } 

//   } 
 

//   for (var _node of node) {
    
//     if(_node.children.length > 0) {
//       childNode = getAllFromNode(_node.children);
//     } 

//     cloneNode = { 
//       styles: getNodeStyles( _node ),
//       attributes: getNodeAttributes( _node ),
//       pseudoElements: getNodePseudoElements( _node ),
//       cssRules: getNodeCssRules( _node ),
//     };

//      Object.assign(cloneNode, getNodeName(_node));
//       parentArr =  parentArr.concat(childNode);
//   }

//   return parentArr.concat(childAttrArr);
// }




function getNodePseudoElements(node) {
  return {
    hasComputed_after: getComputedStyle(node,':after').content || false ,
    hasComputed_before: getComputedStyle(node,':before').content || false, 
    hasComputed_marker: getComputedStyle(node,'::marker').content || false
  }
}



function getNodeComputedStyles(node){
  return getComputedStyle(node);
}


function getNodeStyles(node){
  return node.style.cssText    
}


function getNodeCssRules(node) {
  
  if (typeof(node) === "string") {
    node = document.querySelector(node);
  }

  ruleArr = [];
 
  if (node.length > 0) {
    console.error('function expecting a single node, receieved' + typeof(node));
  }
 
  rules = node.ownerDocument.defaultView.getMatchedCSSRules(node,'');
  [].forEach.call(rules, function( rule ) { 
    ruleArr.push({
      cssRule_selectorText :  rule.selectorText,
      cssRule_style_CssText : rule.style.cssText
    });   
  });
  
//   console.table(ruleArr);
  return ruleArr;
}



// function getUniqueNodes(nodes){
//  var nodeArr = new Array();
//   nodes.forEach(function(node){
//     nodeArr = [...new Set([...nodeArr, ...node])];
//   })
//   return nodeArr;
// }
  



// function getNodeInlineStyles();

  // MORE Info
  // (obj CSSStyleDeclaration).__proto__["Symbol(Symbol.toStringTag)"]
  //getComputedStyle(node).cssText
  //getComputedStyle(node).cssText.__proto__.getPropertyValue
  //getComputedStyle(node).cssText.__proto__["get cssText"]

//   computed = {
//     'hover': getComputedStyle(node,":hover").getPropertyValue(""),
//     'before': getComputedStyle(node,":before").getPropertyValue(""),
//     'after': getComputedStyle(node," :after").getPropertyValue(""),
//     "computedStyle": getComputedStyle(node).getPropertyValue("")
//   }

