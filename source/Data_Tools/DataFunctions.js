var get_links=()=>{
  var result = [];
  document.querySelectorAll('a').forEach(
  function (link){
    var url = link.href.toString().trim();
    var title =link.innerText.trim();
      result.push([" - [", title, "](", url, ")"].join(""))
  });
  return result.join("\n")
}

