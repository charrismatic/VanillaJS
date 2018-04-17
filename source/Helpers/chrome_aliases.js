
function get(selector){ return document.querySelector(selector); }
function getAll(selector){ return document.querySelectorAll(selector); }
function getFrom(node, selector){ return node.querySelector(selector); }
function getAllFrom(node, selector){ return node.querySelectorAll(selector); }

function parseIn(node){
  if (typeof(nodes) === 'string') {
    return get(node);
  } else
  return node;
}

function parseAllIn(nodes){
  if (typeof(nodes) === 'string') {
    return getAll(nodes);
  } else
  return nodes;
}

function getText(node) {
  node = parseIn(node);
  return node.innerText;
}

function getAllText(nodes){
  textArr = [];
  nodes = parseAllIn(nodes);

  for (var i in nodes){
    if(nodes[i].innerText){
      textArr.push(nodes[i].innerText);
    }
  }
  return textArr.join("\r\n");
}

// nd[0].collectTextNodes()
 
function copyText(node) {
  node = parseIn(node);
  copy(node.innerText);
}

function getNodeEventListeners(node){
  eventArr = [];

  events = getEventListeners(node);
//   for (event in events){
//     event.
//   }

  return events;
}

function copyAllTex(node) {
  textArr = [];
  nodes = parseAllIn(nodes);

  for (var i in nodes){
    if(nodes[i].innerText){
      textArr.push(nodes[i].innerText);
    }
  }
  copy(textArr.join("\r\n"));
}

function copyNode(node){ copy(node); }
function viewNode(node){ dir(node); }
function getKeys(node){ return keys(node); }
function getValues(node){ return values(node); }
function getDocumentAllNodes(){ return document.all; }
function getWindowRoot() { return document.defaultView; } // or return window.self;
function getCurrentScript(){ return document.currentScripts; }
function getAllScripts(){ return document.scripts; }
