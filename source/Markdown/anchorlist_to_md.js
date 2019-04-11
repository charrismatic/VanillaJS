
function anchorlist_to_markdown (links, options) {
  var mdList = [];
  if (options.title) {
    mdList.push(`"# ${options.title}\n`)
  }
  if (options.description) {
    mdList.push(`${options.description}\n`);
  }

  for (link of links) {
    var text = link.innerText.trim().replace(/\s+/g, ' ');
    mdList.push(format_mdlink(text, link.href, {style: 'list'}))
//     mdList.push(` - [${text}](${link.href})`);
  }

  mdList.push('\n');
  return mdList.join('\n');
}
