// anchorlist_to_markdown(document.links, {title: 'test', description: 'description'})
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
    mdList.push(` - [${text}](${link.href})`);
  }

  mdList.push('\n');
  return mdList.join('\n');
}

function get_code_block_sections (nodes){
  var output = "";
  nodes.forEach( function( node ){
    output += "\n\n"
    + "```\n"
    + node.innerText
    + "\n```\n\n";
  })
  console.log( output );
;}

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
  }
);

out += '\n\n';
return out;
}


// html_to_md($0)
function code_to_md(html, options={}) {
  var out = "";
  var codeblock = html.querySelectorAll('PRE');
  codeblock.forEach(function( node ){
    out += `\n\`\`\`\n${node.innerText.trim()}\n\`\`\`\n\n`;
  });
  return out;
}


// TODO: EXTRAT THSI GITHUB PROJET TEMPLATE
function parse_header_data_to_markdown () {
  var out = '';
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

  // FRONT MATTER
  out += '---\n' +
  'hostname: ' + site.hostname + '\n' +
  'href: ' + site.href + '\n' +
  'title: ' + site.site_title + '\n'+
  '---\n\n';

  var repository_namespace = document.querySelector('h1').innerText;
  var project_description  = document.querySelector('.repository-content .repository-meta-content').innerText;
  var repository_issues    = document.querySelector('.octicon-issue-opened').parentNode.innerText.trim();

  render_cache = '';

  var repository_social = document.querySelectorAll('.repohead .pagehead-actions li').forEach(
    function (item) {
      render_cache += ' ' + item.innerText.trim() + '\n';
      return render_cache;
    });
    repository_social = render_cache ;

    //   var project_tag = document.querySelector('.repository-content .list-topics-container').innerText.replace( /\n/g, ', ' );
    var project_tag = '';

    render_cache = '';
    var project_numbers = document.querySelectorAll('.repository-content .numbers-summary li').forEach(
      function( node ){
        render_cache += '' + node.innerText.trim() + '\n';
        return ( render_cache  );
      }  );
      project_numbers = render_cache;


      render_cache = '';
      var project_languages = document.querySelectorAll('.repository-content .repository-lang-stats-numbers li').forEach(
        function( node ){

          render_cache += '' +  node.innerText.trim() + ' - ';
          return( render_cache);

        } );
        project_languages = render_cache;


        out += [
          '# ' + repository_namespace,
          '_' +project_description + '_',
          project_languages,
          project_numbers,
          repository_social,
          repository_issues,
          project_tag,
        ].join( '\n\n' )
          console.log( out );
} // GUS




      var parse_node_properties = ( node, property ) => {
        var result = [];
        var attr = node[property];
        var entries = Object.entries( attr );
        var keys = Object.keys( attr );
        var values = Object.values( attr );
        result.push( node.tagName.trim() );
        for (value of values ) {
          result.push( value.name.trim() +'='+ value.value.trim() );
        }
        return "" + result.join(' ').trim() + '\n';
      }



      function parse_content_block (selectors) {
        var out = '';
        var frontmatter = '';
        var article = document.querySelector( selectors.article );
        var title = document.querySelector( selectors.title ).innerText;
        console.log( "title:: ", title ) ;
        var content = article.children;

        var tag;
        var headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

        console.log(content);

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
              mdHeader =  "".padEnd( headers.indexOf(tag) + 1 , "#" );
              out += mdHeader + ' ' + node.innerText + "\n\n";
            }
          } else if  ( tag === 'PRE' || tag === "CODE" )  {
            // CODE BLOCKS
            out += '\n' +
            '```\n' +
            node.innerText.trim() +
            '\n```' +
            '\n\n';
          } else if  ( tag === 'UL' || tag === "OL" ) {
            // LISTS
            out += '\n' +
            '__LIST TITLE__' +
            '\n\n' +
            node.innerText.trim() +
            '\n\n';
          } else {
            out += '\n' +
            node.innerText.trim() +
            '\n\n';
          }
        }
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
        //   console.log( result )
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


      function create_output_header(){
        var header = "\n\n";
        header += location.href + "\n\n";
        header += "# " +  document.title + "\n\n";
        header += "---------------------------\n";
        return header;
      }
