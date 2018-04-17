
function get_site_meta_tags() {
  var result = [];
  meta = document.querySelectorAll('head meta');
  meta.forEach( function( node ){
    var row = [];
    var attrs = node.attributes;
    for ( var attr of attrs ) {
      row.push("" + attr.name + "__" +  attr.value + "");
    }
    result.push("-  " + row.join(" || ") + '\n' );
  } );
  header = '### SITE META TAGS';
  return  "\n\n" + header + "\n\n " + result.join('\n') + "\n\n";
}

function create_output_header(){
  var header = "\n\n";
  header += location.href + "\n\n";
  header += "# " +  document.title + "\n\n";
  header += "---------------------------\n";
  return header;
}
