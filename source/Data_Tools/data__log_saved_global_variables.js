function dump_obj ( ob ){
  console.log( '%c ' + 'OBJECT  - length: ' + ob.length , 'color: grey;');
  console.log( ob, ob.length );

  if (ob.length>0) {
    for (var i=0; i<ob.length; i++) {
      console.log(keys( ob )[i], values( ob )[i]);
    }

  } else {
    for ( item in ob ) {
      console.log( item, JSON.stringify(ob[item]));
   }
  }
}

var count = 17;
var length=0;
for (var i=1; i<count; i++) {

  var var_string = eval('temp' + i);
  length = var_string.length;

  console.log( '%c ' + 'temp' + i, 'color: red;');
  if ( typeof( var_string ) === 'object') {
    dump_obj( eval('temp' + i) );
  } else {
    console.log( eval('temp' + i) );
  }

}
