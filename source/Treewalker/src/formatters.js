
function indent (hTag) {
  var index = parseInt( hTag[1]);
  var indentation = '';
  for (var i=0; i<index; i++){
    indentation = indentation + '  ';
  }
  return indentation;
}
