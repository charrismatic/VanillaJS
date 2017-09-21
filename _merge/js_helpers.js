a = JSON.json

// SORT
a.sort(function(a, b) {
  return a.KEY.localeCompare(b.KEY)
});



// REDUCE
for ( element of a ) { unique_set = [...new Set([...unique_set, a.key])]; }



// FILTER ON VALUE
a.filter(function(n){return n > 2;});


// REPLACE ALL
function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}

