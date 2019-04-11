(() => {
  function filter_heading(node){
    let tag=node.tagName.toLowerCase();
    const accepted = ['h1','h2','h3','h4','h5','h6', 'li'];
    const rejected = ['footer','nav','aside'];
    if(rejected.indexOf(tag) >= 0){return NodeFilter.FILTER_REJECT;}
    else if(accepted.indexOf(tag) >= 0){return NodeFilter.FILTER_ACCEPT;}
    else{return NodeFilter.FILTER_SKIP}
  }
  function indent(hTag){
    if (hTag[0]=='L'){ return current_indent + '- '}

    let index=parseInt(hTag[1]);
    let indentation = '';
    let sp=' ';

    for(let i=0;i<index;i++){indentation=indentation+sp+sp;}
    current_indent = indentation;
    return indentation;
  }
  function get_outline_header(){
    const sp = ' ';
    const br = '\n';
    const title = `title: ${document.title}${sp}`;
    const url_label = `url: ${location.href}${sp}`;
    const header = `---${br}Document Outline:${br}=================${sp}`;
    const outline_header = [];
    outline_header.push(title);
    outline_header.push(url_label);
    outline_header.push(header);
    return outline_header;
  }
  const outline = get_outline_header();
  var current_indent = '';
  var root_node = document.querySelector('body');

  if (! document.createTreeWalker) {
    console.log('Your browser does not support the createTreeWalker method!');
    return false;
  }

  let walker = document.createTreeWalker(
    root_node,
    NodeFilter.SHOW_ELEMENT,
    filter_heading,
    false
  );

  let node = walker.root;
  while(node = walker.nextNode()){
    outline.push(node.nodeName + '.' + indent(node.nodeName) + node.textContent.trim());
  }

  return outline.join('\n');
})()
