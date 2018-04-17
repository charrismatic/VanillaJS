

var extract_object_property = ( data, name, options={recursive_limit:3} ) => {
   // console.log("searching:", data , " for ", name);
  if ( typeof data.recursive_depth == 'undefined' ) {
    var recursive_depth = 1;
  } else if ( data.recursive_depth > options.recursive_limit ) {
    console.log( "stop youve gone too far" );
    return false;
  } else {
    recursive_depth = data.recursive_depth;
  }

  Object.keys( data ).forEach(function(key) {
    if ( key === name ) {
      //  console.log('key found ' )
      console.log(data[key]);
    }
    else if (typeof data[key] === 'object' ) {
       if ( name in Object.keys ) {
          console.log( 'data['+name+'] = ', data[name] );
       }
       extract_object_property( Object.assign( data[key], recursive_depth + 1, ), name, options );
    } else {
      return false;
    }
  });
}

// dump_obj( stylelist);
// extract_object_property( stylelist, 'watch_path', { recursive_limit: 6 });
