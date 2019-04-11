
var get_scripts_urls = () => {
  var scripts = document.scripts;
  for (script of scripts) {
    if (script.src) {
      console.log(script.src);
    } else  {
      console.log(script.baseURI);
    }
  }
}
function getAllScripts(){
  return document.scripts;|
}

function getScriptsData(){
  var scriptArr = [];
  var filtered = ["jquery", "google", "bootstrap"];
  var scripts = getAllScripts();

  [].forEach.call( scripts , function( script ) {
    var scriptObj = {};

    scriptObj.script_src = script.src;

    // SCRIPT NODE WILL HAVE TEXT AS CHILDNODE
    if (script.childNodes.length > 0) {
      var title = script.src.toLowerCase();

      // filter out common libraries
      for( filter of filteredScripts ){
        if (!title.includes(filtered)) {
          scriptObj.text = script.text;
        }
      }
    }
    scriptArr.push(scriptObj);
  });

  return scriptArr;
}

var site_scripts = getScriptsData();
console.log( site_scripts );

// var script_data = get_site_scripts();
