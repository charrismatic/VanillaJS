/***************************************************************************/
// Vanilla Javascript Data Gathering
// Used to collect data without using a framework or library tools

// TODO: Get all X on a page (img url, a href, script src etc)
// REF: https://drafts.csswg.org/cssom/
// TODO: GET ALL FORMS ON PAGE, LOOK FOR HIDDEN TRACKERS, OR BAR THINGS

/* UTILITIES */
// THE BASISCS
// Get the first <h1> element in the document
// var h1 = document.getElementsByTagName("H1")[0];

// // Create a "class" attribute
// var att = document.createAttribute("class");

// // Set the value of the class attribute
// att.value = "democlass";
// // Add the class attribute to <h1>
// h1.setAttributeNode(att);
// // OR
// document.getElementsByTagName("H1")[0].setAttribute("class", "some-class");
// // REMOVE ATTRIBUTES
// document.getElementsByTagName("H1")[0].removeAttribute("class");
/*
SHORTCUTS
$(selector)  == document.querySelector()
$$(selector) returns an array of elements that match the given CSS selector. This command is equivalent to calling document.querySelectorAll().
Note: If you are using a library such as jQuery that uses $, this functionality will be overwritten, and $ will correspond to that library's implementation.
$0 - $4
The $0, $1, $2, $3 and $4 commands work as a historical reference to the last five DOM elements inspected within the Elements panel or the last five JavaScript heap objects selected in the Profiles panel. $0 returns the most recently selected element or JavaScript object, $1 returns the second most recently selected one, and so on.
$_
$_ returns the value of the most recently evaluated expression.
*/


// GET ALL IDS ON PAGE
function getAllIds() {
  var id_list = [];
  var nodes = document.querySelectorAll('*');
  [].forEach.call(nodes, function(node) {
    if (node.id!==""){
      id_list.push( node.id);
    }
  });
  // console.log(id_list);
 return id_list;
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
           //  cssStyleRuleArr = [...new Set([...cssStyleRuleArr, ruleObj ])];
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


function getAllStylesheets () {
  sheets = [];
  for (var i=0; i < document.styleSheets.length; i++){
  var styleSheet = document.styleSheets[i];
    sheets.push(styleSheet);
  }
  // console.log(sheets);
  return sheets;
}


function getAllScripts(){
  return document.scripts;
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



function getScriptsData(){
  var scriptArr = [];
  var filteredScripts = ["jquery", "google", "bootstrap"];
  var scripts = getAllScripts();

  [].forEach.call( scripts , function( script ) {
    var scriptObj = {};
    scriptObj.script_baseURI = script.baseURI;
    scriptObj.script_src = script.src;
    if (script.attributes.length  > 0) {
      scriptObj.script_attributes = getNodeAttributes(script);
    }

    // SCRIPT NODE WILL HAVE TEXT AS CHILDNODE
    if (script.childNodes.length > 0) {
        var title = script.src.toLowerCase();

        // filter out common libraries

      for( filter of filteredScripts ){
        if (!title.includes(filter)){
          scriptObj.text = script.text;
        };
      }
    }

    scriptArr.push(scriptObj);
  });

 return scriptArr;
}
