a = JSON.json;

// SORT
a.sort(function(a, b) {
  return a.KEY.localeCompare(b.KEY)
});


// REDUCE
for ( element of a ) { unique_set = [...new Set([...unique_set, a.key])]; }



// FILTER ON VALUE
const array_filter_value = ( limit ) {
  a.filter( function( n ){
    return n > limit;
  });
}



// REPLACE ALL
function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}


// ITERATE OVER ARRAY
[].forEach.call(nodes, function(node) {})


// ARRAY MERGE
const array_merge = (arrA, arrB) => {
  if ( arrA ) {
    arrB = [...new Set([...arrB, arrA ])];
  }
  return arrB;
}




// SORTING

function sortByDocumentOrder() {
  var results = document.querySelectorAll('.result');
  var getIndexOf = function (resultIndex) {
    return parseInt(results.item(resultIndex).getAttribute('data-result-index'));
  };

  document.querySelector('#results').innerHTML =
  Object.keys(results)
  .sort( function (a, b) {
    return getIndexOf(a) < getIndexOf(b) ? -1 : 1;
  } )
  .map( function (i) {
    return results.item(i).outerHTML;
  } )
  .join('\n');
}


function sortByCategory() {
  var results = document.querySelectorAll('.result');
  var getCategoryOf = function (resultIndex) {
    return results.item(resultIndex).getAttribute('data-result-level');
  };

  results = document.querySelectorAll('#reports .results');

  for (group of results ){
    group.innerHTML =
    Object.keys(results)
    .sort( function (a, b) {
        var categoryA = getCategoryOf(a);
        var categoryB = getCategoryOf(b);

        if ('error' === categoryA) {
          return -1;
        } else if ('warning' === categoryA) {
          if ('error' === categoryB) {
            return 1;
          } else {
            return -1;
          }
        }

        if ('notice' === categoryB) {
          return -1;
        } else {
          return 1;
        }
      }
    )
    .map( function (i) {
        return results.item(i).outerHTML;
      }
    )
    .join('\n');
  }
}


function array_extract(data, where) {
    for (var key in data) {
        where[key] = data[key];
    }
}


function sort(name) {
  var reports = document.querySelectorAll('.report');
  var getReportScore = function (resultIndex) {
    return +reports.item(resultIndex).getAttribute('data-' + name + '-count');
  };

  document.querySelector('#reports').innerHTML = Object.keys(reports)
    .sort( function (a, b) {
      return getReportScore(a) < getReportScore(b) ? 1 : -1;
    }
  )
  .map( function (i) {
      return reports.item(i).outerHTML;
    }
  )
  .join('\n');
}


// COPY OBJECT
cloneNode = {
      styles: getNodeStyles( _node ),
      attributes: getNodeAttributes( _node ),
      pseudoElements: getNodePseudoElements( _node ),
      cssRules: getNodeCssRules( _node ),
    };

     Object.assign(cloneNode, getNodeName(_node));
      parentArr =  parentArr.concat(childNode);
  }

// function getUniqueNodes(nodes){
//  var nodeArr = new Array();
//   nodes.forEach(function(node){
//     nodeArr = [...new Set([...nodeArr, ...node])];
//   })
//   return nodeArr;
// }
