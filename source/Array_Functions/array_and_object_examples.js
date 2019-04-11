
// SORTING
function sortByDocumentOrder() {
  var results = document.querySelectorAll('.result');
  var getIndexOf = function (resultIndex) {
    return parseInt(
      results
        .item(resultIndex)
        .getAttribute('data-result-index')
    );
  };

  document.querySelector('#results').innerHTML = ((results) => {
    return Object.keys(results)
      // SORT RESULTS
      .sort(function (a, b) {
        return getIndexOf(a) < getIndexOf(b) ? -1 : 1;
      })
      // GET ITEM HTML
      .map(function (i) {
        return results.item(i).outerHTML;
      })
      // JOIN RESULTS
      .join('\n');
  })();
}


function sortByCategory() {
  var results = document.querySelectorAll('.result');

  var getCategoryOf = function (resultIndex) {
    return results.item(resultIndex).getAttribute('data-result-level');
  };

  results = document.querySelectorAll('#reports .results');

  // ITERATE OVER GROUPS
  for (let group of results ){
    group.innerHTML = Object.keys(results)

      // SORT CATEGORIES
      .sort( function (a, b) {
        let categoryA = getCategoryOf(a);
        let categoryB = getCategoryOf(b);

        // ERRORS
        if (categoryA === 'error') {
          return -1;
        }

        // WARNINGS
        else if (categoryA === 'warning') {
          if (categoryB === 'error') {
            return 1;
          } else {
            return -1;
          }
        }

        // NOTICES
        if (categoryB === 'notice') {
          return -1;
        } else {
          return 1;
        }
      })

      // GET ITEM HTML
      .map( function (i) {
        return results.item(i).outerHTML;
      })

      // JOIN RESULTS
      .join('\n');
  }
}


function sort(name) {
  var reports = document.querySelectorAll('.report');
  var getReportScore = function (resultIndex) {
    return +reports.item(resultIndex).getAttribute('data-' + name + '-count');
  };

  document.querySelector('#reports')
    .innerHTML = Object.keys(reports)
      .sort( function (a, b) {
        return getReportScore(a) < getReportScore(b) ? 1 : -1;
      })
      .map( function (i) {
        return reports.item(i).outerHTML;
      })
      .join('\n');
}


// COPY DOM OBJECT
let cloneNode = () => {
      styles: getNodeStyles( _node ),
      attributes: getNodeAttributes( _node ),
      pseudoElements: getNodePseudoElements( _node ),
      cssRules: getNodeCssRules( _node ),
    };
   Object.assign(cloneNode, getNodeName(_node));
    parentArr =  parentArr.concat(childNode);
};

function getUniqueNodes(nodes){
 var nodeArr = new Array();
  nodes.forEach(function(node){
    nodeArr = [...new Set([...nodeArr, ...node])];
  })
  return nodeArr;
}



// ARRAY FLATTEN
var flattenTco = ([first, ...rest], accumulator) => {
  (first === undefined)
    ? accumulator
    : (Array.isArray(first))
      ? flattenTco([...first, ...rest])
      : flattenTco(rest, accumulator.concat(first));
}

// var flatten = (n) => flattenTco(n, []);

// // ES6
var flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

console.log(flatten([[1,[2,[[3]]]],4,[5,[[[6]]]]]))


function array_extract(data, where) {
  for (var key in data) {
    where[key] = data[key];
  }
  conosole.log( where  );
  return where;
}


var dump_obj = ( data ) => {
  if ( typeof data.recursive_depth == 'undefined' ) {
    var recursive_depth = 1;
  } else if ( data.recursive_depth > 3 ) {
    console.log('stop youve gone too far');
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
  });
};
// dump_obj();


var extract_object_property = ( data, name, options={recursive_limit:3} ) => {
  //   console.log("searching:", data , " for ", name);
  if ( typeof data.recursive_depth == 'undefined' ) {
    var recursive_depth = 1;
  } else if ( data.recursive_depth > options.recursive_limit ) {
    console.log('stop youve gone too far');
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
      extract_object_property( Object.assign( data[key], recursive_depth + 1), name, options );
    } else {
      return false;
    }
  });
};
extract_object_property( stylelist, 'watch_path', { recursive_limit: 6 });
