/*
TODO:
classes and tags to look for
  document meta: title, description
  post header: .post-header
  source: document.URL, .post-meta, time
*/

var selectors = {
  article: '',
  title: 'h1',
  table_of_contents: '',
  ignoreTags: '',
  references: '#post-content p a',
  list: '.wiki-custom-sidebar ul a',
};

var options = {
  code: ".highlight",
  title: "",
  description: ""
};

// var links = document.querySelectorAll(selectors.list);
// anchorlist_to_markdown(links, options );
// var code = document.querySelectorAll(options.code);
// get_code_block_sections(code);
// parse_content_block(selectors);
// console.log( get_site_form_data() );
// console.log( get_site_meta_tags());
// parse_header_data_to_markdown();

var github_content = '.entry-content';


var selector = github_content;
html = document.querySelector( selector );
var markdown = td.turndown( html.innerHTML );
console.log( markdown );



function anchorlist_to_markdown ( url_list, options ) {
  var mdList = '';
  mdList += "\n\n";

  if (options.title) {
    mdList += "# " + options.title + "\n\n";
  }
  if (options.description) {
    mdList += options.description  + "\n\n";
  }
  url_list.forEach( function( link )  {
    line = "" +
    " - [" +
    link.innerText +
    "](" +
    link.href +
    ") " +
    "\n";

    mdList += line;

    //    console.log(link);
    //    console.log(line);
  });

  mdList += '\n\n';
  console.log( mdList );
}


function get_code_block_sections ( nodes ) {
  var output = "";
  // console.log( nodes );
  nodes.forEach( function( node ){
    output += "\n\n"
      + "```\n"
      + node.innerText
      + "\n```\n\n";
  } );
  console.log( output );
}


function convert_html_list_to_markdown ( nodes ) {
  var out = "## TABLE OF CONTENTS  ";
  out += '\n\n';
  nodes.forEach( function( node ){
    out += node.innerText;
    //       if ( node.tagName === "UL" ) {
    //         out += "\n";
    //         var childNodes = node.children;
    //      listprefix = " - ";
    //         console.log( childNodes );
    //         console.log(  node.innerText  );
    //         out += node.innerText;
    //        childNodes.forEach( function( node ){
    //               console.log( node.innerText );
    //             out += "\n"
    //             + node.innerText;
    //         });
    //       } else {
    //         out += node.innerText;
    //       }
    //       out += "\n"  +
    //       out += node.children
    //        "";
  } );
  out += '\n\n';
  return out;
}


function html_to_md(html, options={} ) {
  var out = "";
  var codeblock = html.querySelectorAll('PRE');
  codeblock.forEach(function( node ){
    console.log( node.parentNode.innerHTML.toString() );
    out += '\n' +
    '```\n' +
    node.innerText.trim() +
    '\n```' +
    '\n\n';
  });
  return out;
}




function parse_header_data_to_markdown( ) {
  var out = "";
  var render_cache;

  var github_data = {
    repository_issues: repository_issues,
    repository_social: repository_social,
    project_description: project_description,
    projet_tag: project_tag,
    project_languages: project_languages,
    project_numbers: project_numbers
  };

  var site = {
    hostname: location.hostname,
    href: location.href,
    header_parameters: location.hash,
    site_title: document.title,
    data: github_data,
    main_content: 'article'
  };

    // FRONT MATTER META DATA
  out += "---\n" +
    "hostname: " + site.hostname + "\n" +
    "href: " + site.href + "\n" +
    "title: " + site.site_title + '\n'+
    "---\n\n"

  var repository_namespace = document.querySelector('.repohead h1').innerText;
  var project_description = document.querySelector('.repository-content .repository-meta-content').innerText;
  var repository_issues = document.querySelector('.octicon-issue-opened').parentNode.innerText.trim();

  render_cache = "";
  var repository_social = document.querySelectorAll('.repohead .pagehead-actions li').forEach(
    function( item ){
      render_cache += " " + item.innerText.trim() + "\n";
      return render_cache;
    }
  );
    repository_social = render_cache ;

  //   var project_tag = document.querySelector('.repository-content .list-topics-container').innerText.replace( /\n/g, ', ' );
  var project_tag = '';

  render_cache = "";
  var project_numbers = document.querySelectorAll('.repository-content .numbers-summary li').forEach(
    function( node ){
      render_cache += "" + node.innerText.trim() + "\n";
      return ( render_cache  );
    }  );

  project_numbers = render_cache;

  render_cache = "";
  var project_languages = document.querySelectorAll('.repository-content .repository-lang-stats-numbers li').forEach(
    function( node ){
      render_cache += "" +  node.innerText.trim() + " - ";
      return( render_cache);
  } );

  project_languages = render_cache;

  out += [
    "# " + repository_namespace,
    "_" +project_description + "_",
    project_languages,
    project_numbers,
    repository_social,
    repository_issues,
    project_tag,
  ].join( '\n\n' )

  console.log( out );
}

function extract_html_links(options) {}


function parse_content_block (selectors) {
  var out = "";
  var frontmatter = "";
  var article = document.querySelector( selectors.article );
//   var title = "# " + article.querySelector( selectors.title ).innerText;
  var title = document.querySelector( selectors.title ).innerText;
  console.log( "title:: ", title ) ;
  //   var table_of_contents = convert_html_list_to_markdown( document.querySelectorAll( selectors.table_of_contents ));
  var content = article.children;
  var tag;
  var headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

  console.log(content) ;
  // ADD TITLE
  out += '# ' + title + '\n\n';
  for ( node of content ) {
    tag = node.tagName;
    // HEADINGS
    if ( headers.includes( tag )  ){
      //  DOCUMENT TITLE ALREADY ADDED - CHANGE TO SECOND HEADING
      if ( tag === "H1" ) {
        out += '\n' +
            '---' +
            '\n\n' +
            '## ' + node.innerText + "\n";
      } else {
        // DYNAMICALLY ADD ##
        mdHeader = "".padEnd( headers.indexOf(tag) + 1 , "#" );
        out += mdHeader + ' ' + node.innerText + "\n\n";
      }
    }
    // CODE BLOCKS
    else if  ( tag === 'PRE' || tag === "CODE" )  {
      out += '\n' +
        '```\n' +
        node.innerText.trim() +
        '\n```' +
        '\n\n';
    }
    // LISTS
    else if  ( tag === 'UL' || tag === "OL" ) {
      out += '\n' +
        '__LIST TITLE__' +
        '\n\n' +
        node.innerText.trim() +
        '\n\n';
    }
    else {
      out += '\n' +
      node.innerText.trim() +
      '\n\n';
    }
  }
//   console.log( title );
//   console.log( table_of_contents );
//   console.log( article.innerText );
//   return '\n\n\n' + out + '\n\n\n';
}




function get_site_meta_tags() {

  var result = [];
  meta = document.querySelectorAll('head meta');
  meta.forEach( function( node ){
    var row = [];
    var attrs = node.attributes;
    for ( var attr of attrs ) {
      row.push("" + attr.name + "__" +  attr.value + "");
    }
    result.push("-  " + row.join(" || ") + '\n' );
  } );
  header = '### SITE META TAGS';
  return  "\n\n" + header + "\n\n " + result.join('\n') + "\n\n";
}




function parse_node_properties ( node, property ) {
  var result = [];
  var attr = node[property];
  var entries = Object.entries( attr );
  var keys = Object.keys( attr );
  var values = Object.values( attr );

  result.push( node.tagName.trim() );
  for (value of values ) {
    result.push( value.name.trim() +"="+ value.value.trim() );
  }
  return "" + result.join(' ').trim() + '\n';
}




function get_site_form_data() {
  var forms = document.querySelectorAll('form');
  var form_result = [];
  var result = [];

  result.push("\n---\n");
  for (form of forms){
    form_result = parse_node_properties( form, 'attributes' );
    result.push(form_result.trim());
    var inputs = form.querySelectorAll('input');
    var input_results = ['  '];
    for ( input of inputs ){
      input_row = parse_node_properties( input , 'attributes');
      input_results.push( "  " + input_row );
    }
    result.push( input_results.join('\n') );
    result.push("---\n");
  }

  var header = '### SITE FORMS \n\n';
  return (header + result.join('\n').trim());
}
