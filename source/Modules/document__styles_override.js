// ref: classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// ref: className https://developer.mozilla.org/en-US/docs/Web/API/Element/className


// ADD OR REMOVE STYLE OR CLASSES
// Get the first <h1> element in the document
// var h1 = document.getElementsByTagName("H1")[0];

// Create a "class" attribute
// var att = document.createAttribute("class");

// Set the value of the class attribute
// att.value = "democlass";

// Add the class attribute to <h1>
// h1.setAttributeNode(att);

// OR
// document.getElementsByTagName("H1")[0].setAttribute("class", "some-class");

// REMOVE ATTRIBUTES
// document.getElementsByTagName("H1")[0].removeAttribute("class");



// APPEND RESET STYLES TO STYLESHEET IN DCOUMENT
function addResetStyles() {

  var cls_reset_inline = "a, b, big, i, small, tt, abbr, acronym, cite, code, dfn, em, kbd, strong, samp, time, var, bdo, br, img, map, object, q, span, sub, sup, button, input, label, select, textarea { display: inline-block; float: none; padding: 1.5em 0; position: relative; width: initial; max-width: 100%; height: initial max-height: 100%; margin: 0.5em auto; padding: 0; border: 0; top: 0; left; 0; bottom: initial; right: initial;}";
  var cls_reset_block = "address, article, aside, blockquote, canvas, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, li, main, nav, ol, output, p, pre, section, table, tfoot, ul, video { position: relative; display: block; float: none; width: 100%; max-width: 100%; height: auto; max-height: auto; margin: 0.4em auto; padding: 0; border: 0; top: 0; left; 0; bottom: initial; right: initial; }";
  var cls_body_pad = "body { width: 90%; margin: auto; }";
  var cls_html_reset = "html, body { display: block; max-height: initia; height: auto; overflow: auto; padding: 0,  }";

  document.styleSheets[0].insertRule(cls_reset_inline, 0);
  document.styleSheets[0].insertRule(cls_reset_block, 0);
  document.styleSheets[0].insertRule(cls_body_pad, 0);
  document.styleSheets[0].insertRule(cls_html_reset, 0);
}


// SIMPLIFIED VIEW FOR EASY READING
function addCleanView() {
  var cls_hide_junk = ".sidebar__content, .sidebar-container, #sidebar, .sidebar, sidebar, nav, .nav, .navigation, .nav-list { display: none !important; }";
  document.styleSheets[0].insertRule(cls_hide_junk, 0);
}


function removeStyleRules(custom_list) {
  var style_sheets = document.styleSheets;
  [].forEach.call(nodes, function(el){
  	el.style = "";
  });
}


// REMOVE ALL FROM ALL
function resetAll() {
  var nodes = document.querySelectorAll('*');
  [].forEach.call(nodes, function(el) {
    el.className = "";
    el.id = "";
    el.style="";
  });
}

function resetInline() {
  var nodes = document.querySelectorAll('*');
  [].forEach.call(nodes, function(el) {
    el.style="";
  });
}

// REMOVE ALL CLASSES
function resetClasses() {
  var nodes = document.querySelectorAll('*');
  [].forEach.call(nodes, function(el) {
    el.className = "";
  });
}

// REMOVE ALL IDS
function resetIds() {
  var nodes = document.querySelectorAll('*');
  [].forEach.call(nodes, function(elm) {
    elm.id = "";
  });
}

// REMOVE ALL INLINE STYLES
function resetCustom( nodes, properties) {

  // SELECTORS
  var el_inline = document.querySelectorAll('a, b, big, i, small, tt, abbr, acronym, cite, code, dfn, em, kbd, strong, samp, time, var, bdo, br, img, map, object, q, span, sub, sup, button, input, label, select, textarea');
  var el_blocks = document.querySelectorAll('address, article, aside, blockquote, canvas, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, li, main, nav, ol, output, p, pre, section, table, tfoot, ul, video');
  var el_hide = document.querySelectorAll('base, command, link, meta, noscript, script, style ,title');
  var el_all = document.querySelectorAll('*');

  [].forEach.call(nodes, function(el) {
    el.style = styles
  });
}


// GET ALL IDS
function getAllIds() {
  var id_list = [];
  var nodes = document.querySelectorAll('*');
  [].forEach.call(elms, function(elm) {
    if (elm.id!==""){
      id_list.push( elm.id);
    }
  });
  // console.log(id_list);
 return id_list;
}


// GET ALL CHILD CLASSES FROM NODE
function getChildClasses(selector){
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


// GET INFO ABOUT NODE
// TODO WIP
function getClassInfo(selector) {

  var el = document.querySelector(selector);
  var node_info = {
    "el-id": el.id,
    "el-class": el.classList.value,
    "el-parent-id": el.parentNode.id ,
    "el-parent-class":  el.parentNode.classList.value,
    "el-children-classlist": getChildClasses(selector+" *" ),
  }
  return node_info;
}


// GET LIST OF UNIQUE TAGS ON PAGE
function getUniqueTags() {
  var tagArr = new Array();
  nodeList = document.querySelectorAll('*');
  nodeList.forEach(function(node) {
    tagArr = [...new Set([...tagArr, node.tagName])];
  });

  return tagArr.sort().join(",").toLowerCase();
}

/***
// Shadow Dom
// native divs
var divs = Array.prototype.slice.call(
	document.getElementsByTagName('DIV')
);

divs.forEach(function(e) {
	e.innerHTML = 'CHANGED';
});

// access shadowed divs
var shadowDivs = Array.prototype.slice.call(
	document.querySelector('x-component').shadowRoot.children
); // or .querySelector('div')

shadowDivs.forEach(function(e) {
	if (e.constructor === HTMLDivElement) { // divs only
		e.innerHTML = 'CHANGED IN SHADOW';
	}
});

*/
		