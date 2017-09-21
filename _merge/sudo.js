
function getAllNodes(selector){
 
  nodes = document.querySelectorAll(selector);

  if (nodes.length > 1000) {
    console.warn("Query string returned more than 1000 nodes. Try a something more specific, until the filtering feature is completed");
    console.warn(selector, nodes.length);
    return false;
  } 
  return nodes;
}


// RETURNS A SINGLE NODE 
// USE WITH ELEMENTS THAT HAVE ID
function getNode(selector){
  return document.querySelector(selector);
}


function getNodeAttributes(node){
  attrs =  node.attributes;
  attrArr = [];
  attrs.forEach(function(attr) {
    name = 
    value = attr.nodeValue;
 
    attrArr.push({
      attribute_name : attr.name,
      attribute_value : attr.value
    });
  });

  return attrArr;
}


// function getNodeInlineStyles();

function getNodeComputedStyles(node){

  // MORE Info
  // (obj CSSStyleDeclaration).__proto__["Symbol(Symbol.toStringTag)"]
//getComputedStyle(node).cssText
//getComputedStyle(node).cssText.__proto__.getPropertyValue
//getComputedStyle(node).cssText.__proto__["get cssText"]


// TODO USE COMPUTED STYLE AND  CSSRULE TO SEE FIND SPECIAL CASES
// USE PROPERTY VALUE CONTENT TO TEXT FOR :BEFORE/:AFTER
  return {
      'style_cssText': node.style.cssText,
      'style_propertyValue': node.style.getPropertyValue(""), 
      'hover': getComputedStyle(node,":hover").getPropertyValue(""),
      'before': getComputedStyle(node,":before").getPropertyValue(""),
      'after': getComputedStyle(node," :after").getPropertyValue(""),
      "computedStyle": getComputedStyle(parent).getPropertyValue(""),
  }
}

function getNodeStyles(node){
  
}

//getMatchedCSSRules
function getNodeCssRules(node) {
  
  if (typeof(node) === "string") {
    node = document.querySelector(node);
  }

  ruleArr = [];
 
  if (nodes.length > 0) {
    console.error('function expecting a single node, receieved' + typeof(node));
  }
 
  rules = node.ownerDocument.defaultView.getMatchedCSSRules(node,'');
  rules.forEach( function(rule){
    ruleArr.push({
      cssRule_selectorText :  rule.selectorText,
      cssRule_style_CssText : rule.style.cssText
    });   
  });
  
  console.table(ruleArr);
  return ruleArr;
}




// function getUniqueNodes(nodes){
//  var nodeArr = new Array();
//   nodes.forEach(function(node){
//     nodeArr = [...new Set([...nodeArr, ...node])];
//   })
//   return nodeArr;
// }
  



// A FOR EACH LOOP
//   [].forEach.call(nodes, function(nodes,index){ 
//   });


htmlFrame = "";
stylesheet = [];
ruleArr = [];
console.log(ruleArr);
