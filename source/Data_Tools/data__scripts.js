

var get_site_scripts = () => {
  var scripts = document.scripts;
  for (script of scripts) {
    if (script.src) {
      console.log( script.src);
    } else  {
      console.log( script.baseURI, script.text);
    }
  }
}
