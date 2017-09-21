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
  
  return ruleArr;
}

function makeStyleSheet(ruleArr) {
  sheet="";

  for(rule of ruleArr) {
    console.log(rule);
    sheet += rule.cssText + " \n";
  }  

  return sheet;  
}
 

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
 


function getCss(){
  var selector = '.addthis_inline_share_toolbox';
  sheet = getAllNodeAllChildrenCssRules(selector);
  console.log(sheet);
}

getCss();

