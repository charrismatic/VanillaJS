(function () {
  const log_site_scripts = () => {
    var scripts = document.scripts;
    for (var script of scripts) {
      if (script.src) {
        console.log( script.src);
      } else  {
        console.log( script.innerText);
      }
    }
  };
  const get_node_attributes = (node) => {
    var attrs =  node.attributes;
    var attrArr = {};
    [].forEach.call(attrs, function( attr ) {
      attrArr[attr.name] = attr.value;
    });
    // console.table(attrArr);
    return attrArr;
  };
  const get_all_scripts = () => {
    return document.scripts;
  }
  const get_scripts_data = () => {
    var scriptArr = [];
    var filteredScripts = ['jquery','google','bootstrap'];
    var scripts = get_all_scripts();
    [].forEach.call(scripts , function(script) {
      var scriptObj = Object.create(null);
      scriptObj.script_baseURI = script.baseURI;
      scriptObj.script_src = script.src;
      if (script.attributes.length  > 0) {
        scriptObj.script_attributes = get_node_attributes(script);
      }
      // SCRIPT NODE WILL HAVE TEXT AS CHILDNODE
      if (script.childNodes.length > 0) {
        var title = script.src.toLowerCase();
        // filter out common libraries
        for(var filter of filteredScripts ){
          if (!title.includes(filter)){
            scriptObj.text = script.text;
          }
        }
      }
      scriptArr.push(scriptObj);
    });
    return scriptArr;
  };
  console.log(log_site_scripts());
  console.log(get_scripts_data ());
})();
