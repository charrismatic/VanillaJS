
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




/// GET ALL UNQIUE DOM ELEMENTS FROM A 
// PARENT NODE
function cloneNode(_node) {
 
  var id_list= [];  
  var tag_list = []; 
  var cssRules = {};
  var node_list = []; 
  var class_list = [];
  var childNodeArr = [];
  var node_stylesheet  = [];

  if (typeof(_node) === "string") {
    _node = document.querySelector(_node);
  }  
  
  // TAKE SNAPSHOT OF EXISTING HTML
  var root_html = _node.outerHTML;  

  // GET FIRST NODE AS ROOT
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
     
    nodecss = getNodeCssRules( _node );

    for ( rule in nodecss.nodeStylesheet){
      node_stylesheet = [...new Set([...node_stylesheet, nodecss.nodeStylesheet[rule] ])];  
    }    

    childNodeArr.push({
      _nodeName: data.nodeName,
      __pseudElm: getNodeHasPseudoElements( _node),
      __cssRules: nodecss.nodeCssRules,
      __events: getNodeEventListeners( _node  ),
      __attributes: getNodeAttributes( _node ),
      });
  });

  console.log(node_stylesheet);
  
  id_list.sort().join(",");
  tag_list.sort().join(",");
  node_list.sort().join(",");
  class_list.sort().join(",");

  node_stylesheet.sort().join(';');
   console.log(node_stylesheet);
 
  return {
    rootNode: root_node,
    id_list : id_list,
    tag_list : tag_list,
    node_list : node_list,
    class_list : class_list,
    child_nodes: childNodeArr,
    outerHTML: root_html,
    nodeStylesheet: node_stylesheet,
  }
}


function createClone(cloned){

  var html  = '<!DOCTYPE html>' + "\r\n" +
  '<html><head>' + "\r\n" +
  '<title>CloneDoc</title>' + 
  '<style>' + cloned.nodeStylesheet + '</style>' + "\r\n" +
  '</head>' + "\r\n" +
  '<body><div class="clone-wrapper">' + cloned.outerHTML + '</div>' + "\r\n" +
  '<div><h3>debug:</h3>' + cloned.nodeStylesheet + '</div>' + 
  '</body></html>';

    console.log("html",html);
    with (window.open()) {
        document.write(html);
        document.close();
    }


// rules = cloned.nodeStylesheet.join('');
// document.head.appendChild(cloneStyles);
//     for (ruleIndex in rules) { 
//       ruleTxt = rule[ruleIndex];
//       console.log(ruleTxt);
//       document.styleSheets[0].insertRule(ruleTxt , 0);
//     }
}

function getCloneHTML(cloned){
  var html  = '<!DOCTYPE html>' + "\r\n" +
  '<html><head>' + "\r\n" +
  '<title>CloneDoc</title>' + 
  '<style>' + cloned.nodeStylesheet + '</style>' + "\r\n" +
  '</head>' + "\r\n" +
  '<body><div class="clone-wrapper">' + cloned.outerHTML + '</div>' + "\r\n" +
  '<div><h3>debug:</h3>' + cloned.nodeStylesheet + '</div>' + 
  '</body></html>';
   
   return html;
}

// (function(console){

//     console.save = function(data, filename){

//         if(!data) {
//             console.error('Console.save: No data')
//             return;
//         }

//         if(!filename) filename = 'console.json'

//         if(typeof data === "object"){
//             data = JSON.stringify(data, undefined, 4)
//         }

//         var blob = new Blob([data], {type: 'text/json'}),
//             e    = document.createEvent('MouseEvents'),
//             a    = document.createElement('a')

//         a.download = filename
//         a.href = window.URL.createObjectURL(blob)
//         a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//         e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//         a.dispatchEvent(e)
//     }
// })(console)



 // Function to download data to a file
function downloadData(data, filename, type) {
  // https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
} 

node = getNode("#nav-mobile");


clone = cloneNode(node);
cloneHTML = getCloneHTML(clone);
downloadData(cloneHTML, "test.txt", "text");
// createClone(htmlDoppleganger);


