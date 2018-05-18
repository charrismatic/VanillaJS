var get_site_meta_tags = (() => {

  var result = [];
  var meta = this.document.querySelectorAll('head meta');
  meta.forEach( function( node ){
    var row = [];
    var attrs = node.attributes;
    for ( var attr of attrs ) {
      row.push('' + attr.name + '__' +  attr.value + '');
    }
    result.push('-  ' + row.join(' || ') + '\n' );
  });
  var header = '### SITE META TAGS';
  return  '\n\n' + header + '\n\n ' + result.join('\n') + '\n\n';
})();
console.log( get_site_meta_tags );
