/***************************************************************************/
// Vanilla Javascript Style Overrides
// Can be used in browser console, included in a script, or used in a bookmarklet

// ref: classList https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// ref: className https://developer.mozilla.org/en-US/docs/Web/API/Element/className

// TODO GET ALL HIDDEN
/***************************************************************************/

// APPEND RESET STYLES TO STYLESHEET IN DCOUMENT
function addResetStyles() {

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
}


// SIMPLIFIED VIEW FOR EASY READING
// TODO: WIP
function addCleanView() {
  // ELEMENTS WE DONT CARE ABOUT
	// HEADER, FOOTER, LOGO, NAVIGATION, SIDEBAR, MENU, IFRAME
	var cls_sidebar = ".sidebar__content, .sidebar-container, #sidebar, .sidebar, sidebar { display: none; }"

  document.styleSheets[0].insertRule(cls_sidebar, 0);
  document.styleSheets[0].insertRule(cls_body_pad, 0);
}


// REMOVE ALL INLINE STYLES
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


// REMOVE ALL FROM ALL
function resetAll() {
  var nodes = document.querySelectorAll('*');
  [].forEach.call(nodes, function(el) {
    el.className = "";
    el.id = "";
    el.style="";
  });
}



function resetCustom( nodes, properties) {

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


function getAllStylesheets () {
  sheets = []

  for (var i=0; i < document.styleSheets.length; i++){
  var styleSheet = document.styleSheets[i];
    sheets.push(styleSheet);
  }
//   console.log(sheets);
  return sheets;
}

function getAllCSS() {
  var allCSS =
    [].slice.call(document.styleSheets)
      .reduce(function (prev, styleSheet) {
        if (styleSheet.cssRules) {
          return prev +
            [].slice.call(styleSheet.cssRules)
              .reduce(function (prev, cssRule) {
                return prev + cssRule.cssText;
              }, '');
        } else {
          return prev;
        }
      }, '');
  return allCSS;
}


// USE WITH GET ALL TAGS / NODES
function getAllCSSRules() {

  sheets = getAllStylesheets();

  var allRuleArr = [];

  [].forEach.call(sheets, function( sheet ) {

    console.log( sheet );
    var ruleObj = {};
    var rules = sheet.rules;
    if (rules && rules.length > 1 ){

      var cssStyleRuleArr = [];
      var cssMediaRuleArr = [];
      var cssKeyframesRuleArr = [];
      var cssKeyframeRuleArr = [];

      [].forEach.call( rules , function( rule ) {
         if (rule.type === CSSRule.STYLE_RULE ) {
           ruleObj = ({
             cssStyleRule_selectorText:  rule.selectorText,
             cssStyleRule_style: rule.style.cssText
           });
//            cssStyleRuleArr = [...new Set([...cssStyleRuleArr, ruleObj ])];
            cssStyleRuleArr.push(ruleObj);
         }

        if (rule.type === CSSRule.MEDIA_RULE ) {
           // ruleObj = cssMediaRule_condition :
           console.log(rule);
           cssMediaRuleArr.push(rule);
        }

        if (rule.type === CSSRule.KEYFRAMES_RULE ) {
           cssKeyframesRuleArr.push(rule)
        }

        if (rule.type === CSSRule.KEYFRAME_RULE ) {
           cssKeyframeRuleArr.push(rule);
        }

        });

      allRuleArr.push({
        stylesheet_href: sheet.href,
        stylesheet_tile: sheet.title,
        stylesheet_rules_cssstyles: cssStyleRuleArr,
        stylesheet_rules_media: cssMediaRuleArr,
        stylesheet_rules_keyframe: cssKeyframeRuleArr,
        stylesheet_rules_keyframes: cssKeyframesRuleArr
      });
    }

  });
  return allRuleArr;
}




/***
// Shadow Dom?
// CAN WE RESET ELEMENTS IN SHADOW
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
******/
