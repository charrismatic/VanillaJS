

// var nameObj = {first: "Zaphod", last: "Beeblebrox"};
var dump_obj = ( data ) => {
  if ( typeof data.recursive_depth == 'undefined' ) {
    recursive_depth = 1;
  } else if ( data.recursive_depth > 3 ) {
    console.log( "stop youve gone too far" );
    return false;
  } else {
    recursive_depth = data.recursive_depth;
  }

  Object.keys( data ).forEach(function(key) {
    if (typeof data[key] === 'object' ) {
      dump_obj( Object.assign( data[key], recursive_depth + 1 )) ;
    } else {
      console.log(key + ': ' + data[key]);
    }
  } );
}
