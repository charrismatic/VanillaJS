function getUsed(){}

used = $$('.text-editor-coverage-used-marker');
for (el of used) {
  node = el.parentNode.parentNode.parentNode;
//   test = node.querySelectorAll('.cm-css-qualifier');
  selector = node.querySelectorAll('span[role="presentation"]');
  if(test){ console.log( selector[0].innerText ) } 
}


