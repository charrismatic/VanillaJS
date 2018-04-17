 /***************************************************************************/
// Vanilla Javascript Data Gathering
// Used to collect data without using a framework or library tools

/**
 *  TODO:
 // TODO: Get all X on a page (img url, a href, script src etc)
 // REF: https://drafts.csswg.org/cssom/

 // TODO: SEPERATE HELPERS FROM MAIN FUNCTIONS
 *
 *
 *
 *
 * NOTES:
 *
 * // Shadow Dom?
 * // CAN WE RESET ELEMENTS IN SHADOW
 * // native divs
 * var divs = Array.prototype.slice.call(
 *   document.getElementsByTagName('DIV')
 * );
 * divs.forEach(function(e) {
 *   e.innerHTML = 'CHANGED';
 * });
 * // access shadowed divs
 * var shadowDivs = Array.prototype.slice.call(
 *   document.querySelector('x-component').shadowRoot.children
 * ); // or .querySelector('div')
 * shadowDivs.forEach(function(e) {
 *   if (e.constructor === HTMLDivElement) { // divs only
 *     e.innerHTML = 'CHANGED IN SHADOW';
 *   }
 * });
******/

var Vanilla =  {

  // GET ALL IDS ON PAGE
  getAllIds: function() {
    var id_list = [];
    var nodes = document.querySelectorAll('*');
    [].forEach.call(elms, function(elm) {
      if (elm.id!==""){
        id_list.push( elm.id);
      }
    });
    // console.log(id_list);
   return id_list;
 },

  getAllLinks: function() {
   var out = []

   var anchors = document.querySelectorAll('a');
   [].forEach.call(anchors, function( anchor ) {
     temp = {};
     temp.pathname = anchor.pathname.toString().replace(/\//,"");
     temp.text= anchor.innerText.trim();
     temp.hostname = anchor.hostname;
     temp.hash = anchor.hash;
     temp.href= anchor.href;
     temp.attributes = anchor.attributes;

     out.push(temp);
   });
   return out;
  },

 // GET ALL CHILD CLASSES FROM NODE
 getChildClasses: function(selector) {
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
 },

  // GET INFO ABOUT NODE(WIP)
  getClassInfo: function (selector) {

    var el = document.querySelector(selector);
    var node_info = {
      "el-id": el.id,
      "el-class": el.classList.value,
      "el-parent-id": el.parentNode.id ,
      "el-parent-class":  el.parentNode.classList.value,
      "el-children-classlist": getChildClasses(selector + " *" )
    }

    return node_info;
  },

  // GET LIST OF UNIQUE TAGS ON PAGE
  getUniqueTags: function () {
    var tagArr = new Array();
    nodeList = document.querySelectorAll('*');
    nodeList.forEach(function(node) {
      tagArr = [...new Set([...tagArr, node.tagName])];
    });

    return tagArr.sort().join(",").toLowerCase();
  },

  // GET ARRAY OF CHILD ELEMENTS FROM SELECTOR
  // HAVING ATTRIBUTE X
  // RETURN CHILD NODE SELECTOR, VALUE

  // NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
  // HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
  getAllXFromY: function (parents, attr) {
    var childAttrArr,
        parentArr = [];
    var nodeAttr = {};
    var nodeName;

    // DO THE FIRST QUERY
    if (typeof(parents) === "string") {
      parents = document.querySelectorAll(parents);
    }

    for (var parent of parents) {

      if(parent.children.length > 0) {
        childAttrArr = getAllXFromY(parent.children, attr);
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
  },

  //getMatchedCSSRules
  getElementCssRules: function (node) {

    ruleArr = [];
    node.ownerDocument.defaultView.getMatchedCSSRules(node,'').
    forEach(function(rule){
      ruleArr.push(rule.selectorText);
    });

    return ruleArr;
  },


  /***************************************************************************/
  // Vanilla Javascript Style Overrides
  // Can be used in browser console, included in a script, or used in a bookmarklet

  // ref: classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  // ref: className https://developer.mozilla.org/en-US/docs/Web/API/Element/className

  // --- THE BASISCS ---
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
  /***************************************************************************/

  // APPEND RESET STYLES TO STYLESHEET IN DCOUMENT
  addResetStyles: function () {

    var cls_reset_inline = "a, b, big, i, small, tt, abbr, acronym, cite, code, dfn, em, kbd, " +
      "strong, samp, time, var, bdo, br, img, map, object, q, span, sub, sup, button, input, label, " +
      "select, textarea { display: inline-block; padding: 1.5em 0; position: relative; width: initial; " +
      "max-width: 100%; height: initial max-height: 100%; margin: .5em auto; padding: 0; border: 0; top: 0; " +
      "left; 0; bottom: initial; right: initial;}";
    var cls_reset_block = "address, article, aside, blockquote, canvas, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, li, main, nav, ol, output, p, pre, section, table, tfoot, ul, video { position: relative; display: block; width: 100%; max-width: 100%; height: auto; max-height: auto; margin: 2em auto; padding: 0; border: 0; top: 0; left; 0; bottom: initial; right: initial; }";

    var cls_body_pad = "body { width: 90%; margin: auto;}";

    document.styleSheets[0].insertRule(cls_reset_inline, 0);
    document.styleSheets[0].insertRule(cls_reset_block, 0);
    document.styleSheets[0].insertRule(cls_body_pad, 0);
  },


  // SIMPLIFIED VIEW FOR EASY READING
  // TODO: WIP
  addCleanView: function () {
    // ELEMENTS WE DONT CARE ABOUT
    // HEADER, FOOTER, LOGO, NAVIGATION, SIDEBAR, MENU, IFRAME
    var cls_sidebar = ".sidebar__content, .sidebar-container, #sidebar, .sidebar, sidebar { display: none; }"

    document.styleSheets[0].insertRule(cls_sidebar, 0);
    document.styleSheets[0].insertRule(cls_body_pad, 0);
  },


  // REMOVE ALL INLINE STYLES
  resetInline: function () {
    var nodes = document.querySelectorAll('*');
    [].forEach.call(nodes, function(el) {
      el.style="";
    });
  },


  // REMOVE ALL CLASSES
  resetClasses: function () {
    var nodes = document.querySelectorAll('*');
    [].forEach.call(nodes, function(el) {
      el.className = "";
    });
  },


  // REMOVE ALL IDS
  resetIds: function () {
    var nodes = document.querySelectorAll('*');
    [].forEach.call(nodes, function(elm) {
      elm.id = "";
    });
  },


  // REMOVE ALL FROM ALL
  resetAll: function () {
    var nodes = document.querySelectorAll('*');
    [].forEach.call(nodes, function(el) {
      el.className = "";
      el.id = "";
      el.style="";
    });
  },

  resetCustom: function ( nodes, properties) {

    // TODO: CREATE PARAMETER OPTIONS FOR NODES.
    // CHOOSE PREDEFINED, OR SEND IN A CUSTOM LIST

    // SELECTORS
    // INLINE ELEMENTS
    var el_inline = document.querySelectorAll('a, b, big, i, small, tt, abbr, acronym, cite, code, dfn, em, kbd, strong, samp, time, var, bdo, br, img, map, object, q, span, sub, sup, button, input, label, select, textarea');
    // BLOCK ELEMENTS
    var el_blocks = document.querySelectorAll('address, article, aside, blockquote, canvas, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, li, main, nav, ol, output, p, pre, section, table, tfoot, ul, video');
    // HIDDEN ELEMENTS
    var el_hide = document.querySelectorAll('base, command, link, meta, noscript, script, style ,title');
    // ALL THE THINGS
    var el_all = document.querySelectorAll('*');

    [].forEach.call(nodes, function(el) {
      el.style = styles
    });
  }
};
