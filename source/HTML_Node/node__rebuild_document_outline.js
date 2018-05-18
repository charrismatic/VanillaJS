//Node.compareDocumentPosition() 
//DOCUMENT_POSITION_DISCONNECTED	         1
//DOCUMENT_POSITION_PRECEDING	             2
//DOCUMENT_POSITION_FOLLOWING	             4
//DOCUMENT_POSITION_CONTAINS	             8
//DOCUMENT_POSITION_CONTAINED_BY	         16
//DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC	 32
//// node.compareDocumentPosition( otherNode ) 


// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
function rebuild_node_html_to_root (node) {

  var path = [];
  if ( typeof node === 'string' ) {
    var node = document.getnodeementById(node);;
  } 
  do {
      path.unshift(
        "<" + node.nodeName +
        (node.className ? ' class="' + node.className + '"' : '') +
        (node.id ? ' id="' + node.id + '"' : '')
      );
  } while ((node.nodeName.toLowerCase() != 'html') && (node = node.parentNode));
  var html_path=path.join(">\n");
  console.log(html_path);
  return html_path;
}

var docroot = document.querySelector('body');
var headers = document.querySelector('h1, h2, h3, h4, h5, h6');
var subsection_nodes = document.querySelectorAll('section, article, header, main, footer');

rebuild_node_html_to_root(node);



// function sort(name) {
//   var reports = document.querySelectorAll('.report');
//   var getReportScore = function (resultIndex) {
//     return +reports.item(resultIndex).getAttribute('data-' + name + '-count');
//   };

//   document.querySelector('#reports').innerHTML = Object.keys(reports)
//     .sort( function (a, b) {
//       return getReportScore(a) < getReportScore(b) ? 1 : -1;
//     }
//   )
//   .map( function (i) {
//       return reports.item(i).outerHTML;
//     }
//   )
//   .join('\n');
// }


// SORTING

// function sortByDocumentOrder() {
//   var results = document.querySelectorAll('.result');
//   var getIndexOf = function (resultIndex) {
//     return parseInt(results.item(resultIndex).getAttribute('data-result-index'));
//   };

//   document.querySelector('#results').innerHTML =
//   Object.keys(results)
//   .sort( function (a, b) {
//     return getIndexOf(a) < getIndexOf(b) ? -1 : 1;
//   } )
//   .map( function (i) {
//     return results.item(i).outerHTML;
//   } )
//   .join('\n');
// }



// // ITERATE OVER ARRAY
// [].forEach.call(nodes, function(node) {})


// // SORT
// a.sort(function(a, b) {
//   return a.KEY.localeCompare(b.KEY)
// });


// // REDUCE
// for ( element of a ) { unique_set = [...new Set([...unique_set, a.key])]; }

