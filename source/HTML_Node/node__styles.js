function getCss(){
  var selector = '.addthis_inline_share_toolbox';
  sheet = getAllNodeAllChildrenCssRules(selector);
  console.log(sheet);
}


function getNodeCssRules(node) {
  if (typeof(node) === "string") {
    node = document.querySelector(node);
  }

  ruleArr = [];

  if (nodes.length > 0) {
    console.error('function expecting a single node, receieved' + typeof(node));
  }

  rules = node.ownerDocument.defaultView.getMatchedCSSRules(node,'');
  for( rule of rules){
    ruleArr.push({
      selector :  rule.selectorText,
      cssText  : rule.cssText
    });
  };
  console.table(ruleArr);
  return ruleArr;
}



//  REQUIRES ../DOM_TOOLS/DOM__STYLESHEETS.JS
function getAllNodeAllChildrenCssRules( selector ) {
  var node=document.querySelector(selector)
  var nodes = node.querySelectorAll('*');
  var styleArr=[];
  var sheet = "";
  for ( node of nodes) {
    styleArr.push( getNodeCssRules(node) );
    sheet += makeStyleSheet(rules);
  }
  return sheet;
}


// REQUIRES ../DOM_TOOLS/DOM_SELECTORS
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


// MORE Info
// (obj CSSStyleDeclaration).__proto__["Symbol(Symbol.toStringTag)"]
function getNodeComputedStyles(node){
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
      cssRule_selectorText  :  rule.selectorText,
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

getCss();
