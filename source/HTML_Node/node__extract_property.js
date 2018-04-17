// GET ARRAY OF CHILD ELEMENTS FROM SELECTOR
// HAVING ATTRIBUTE X
// RETURN CHILD NODE SELECTOR, VALUE
function getAllXFromY(parents, attr) {
  var childAttrArr,
      parentArr = [];
  var nodeAttr = {};
  var nodeName;
 var children = [];

  console.log("----START----");
  console.log(typeof(parents) ,parents.length);
  console.log(parents);

  if (typeof(parents) === "string") {
    parents = document.querySelectorAll(parents);
  }

  for (var parent of parents) {

    if(parent.children.length > 0) {
      childAttrArr = getAllXFromY(parent.children, attr);
    }

    nodeName = parent.tagName.toLowerCase();
    if (parent.id) { nodeName += "#" + parent.id; }
    if (parent.className) { nodeName += parent.className.trim().replace(/^/,' ').replace(/\s+/g, "."); }

    nodeAttr = {
      'css': parent.style.getPropertyValue(attr),
      'node': nodeName,
      ':hover': getComputedStyle(parent,":hover").getPropertyValue(attr),
      ':before': getComputedStyle(parent,":before").getPropertyValue(attr),
      ':after': getComputedStyle(parent,":after").getPropertyValue(attr),
      [attr]: getComputedStyle(parent).getPropertyValue(attr),
    };

     parentArr =  parentArr.concat(nodeAttr);
  }

  // RETURN ELEMENT WITHOUT CHILD

  console.log (attrArr);
  return attrArr;
  }
}

//       // NO CHILDREN, COMPLETE BRANCH DEPTH
//       else {
//         var nodeName = parent.tagName.toLowerCase();

//         if (parent.id) {
//           nodeName += "#" + parent.id;
//         }

//         if (parent.className) {
//           nodeName += parent.className.trim().replace(/^/,' ').replace(/\s+/g, ".");
//         }

//         nodeAttr = {
//           'node':nodeName,
//           'css': parent.style.getPropertyValue(attr),
//           'value': getComputedStyle(parent).getPropertyValue(attr)
//         };


//         console.log(nodeAttr);

//         // RETURN ELEMENT WITHOUT CHILD
//         return attrArr.push(nodeAttr);
//       }

//       // AFTER CHILDREN RETURN SELF
//       console.log(parent);
//       var nodeName = parent.tagName.toLowerCase();

//       if (parent.id) {
//         nodeName += "#" + parent.id;
//       }

//       if (parent.className) {
//         nodeName += parent.className.trim().replace(/^/,' ').replace(/\s+/g, ".");
//       }

//       // IS PARENT, HAS NO CHILDREN
//       nodeAttr = {
//           'node':nodeName,
//           'css': parent.style.getPropertyValue(attr),
//           'value': getComputedStyle(parent).getPropertyValue(attr)
//         };

//       // RETURN ELEMENT WITHOUT CHILD
//       return attrArr.push({
//         'node':nodeName,
//         'css': parent.style.getPropertyValue(attr),
//         'value': getComputedStyle(parent).getPropertyValue(attr);
//       });
//     });
//   }
//   return attrArr;
// }

var props = getAllXFromY('nav','z-index');
console.log(props)
props.forEach(function(pro){ console.log(pro.value) });
