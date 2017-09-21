/// http://smartstatesc.org/chairs
var html2data = function(target){

  // PREPROCESSING

  
  // FORMAT ANCHORS
  var formatAnchors = function() {
    hrefs = document.querySelectorAll('.sort-cluster p a');

      [].forEach.call(hrefs, function( ref ) {
        link = ref.pathname.toString().replace(/\//,""); 
        ref.replaceWith(ref.innerText.trim() + ' [meta:{ link:"' + link  + '"}]');
      });
  }

  var fixBrTags = function() {

    // REMOVE OR REPLACE NON-NODE TAGS
    brs = document.querySelectorAll('.sort-cluster p br');

    [].forEach.call(brs, function( br ) {
      if( br.nextSibling && br.nextSibling.tagName === "BR") {
        br.remove();    
      } else {
        br.replaceWith(",");   
      } 
    });
  }

  formatAnchors();
  
  fixBrTags(); 

  var data = "[{";
  var groups = [];
  var group = {};

  var nodes = document.querySelectorAll(target); 
 
  [].forEach.call(nodes, function(node) {
 
     if (node.firstChild.tagName ==="STRONG"){
      // console.log("},{ group : '" + node.firstChild.innerText + "' , members : ");
      data += '},{ group :" ' + node.firstChild.innerText + '" , members: ';
      group.title = node.firstChild.innerText;
    }

    else {
      // console.log( JSON.stringify(node.innerText.split(','))  );
      data += JSON.stringify(node.innerText.split(','));
      group.members = node.innerText.trim().split(',');
    }


    if( group.members && group.title && group.members.length > 0) {
      groups.push(group);
      group={};
    }

  });

  data += '}]';

  console.log(data);
  return groups;
}

html2data('.sort-cluster p');
