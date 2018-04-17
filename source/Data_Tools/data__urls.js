//  GET ALL LINKS, URLS, AND IMAGES,
//  LOG GROUPS TO CONSOLE.

(function() {
  var print_string = "";
  console.group("Data URLs | IMAGES");
  [].forEach.call(document.querySelectorAll("img"), function(img) {
       print_string = "";
        if ( img.src !== "" )   { print_string += "[SRC] "    + img.src   + "";  }
        if ( img.title !== "" ) { print_string += " [TITLE] " + img.title + " "; }
        if ( img.alt  !== "")   { print_string += " [ALT] "   + img.alt   + " "; }
        // console.dir(img);
        console.log(print_string);

  });
  console.groupEnd("Data URLs | IMAGES");


  console.group("Data URLs | LINKS");
  [].forEach.call(document.querySelectorAll("link"), function(link) {
      print_string = "";
      if ( link.href !== "")   { print_string +=  "[HREF] "   + link.href  + "";  }
      if ( link.title !== "" ) { print_string += " [TITLE] "  + link.title + " "; }
      if ( link.rel !== "" )   { print_string += " [REL] "    + link.rel   + " "; }
      if ( link.type !== "" )  { print_string += " [TYPE] "   + link.type  + " "; }
      // console.dir(link);
      console.log(print_string);
  });
  console.groupEnd("Data URLs | LINK");


  console.group("Data URLs | ANCHORS");
  [].forEach.call(document.querySelectorAll("a"), function(a) {
      print_string = "";
      if ( a.href !== "")       { print_string += "[HREF] "     + a.href       + "";  }
      if ( a.title !== "" )     { print_string += " [TITLE] "   + a.title      + " "; }
      if ( a.target !== "" )    { print_string += " [TARGET] "  + a.target     + " "; }
      if ( a.rel !== "" )       { print_string += " [REL] "     + a.rel        + " "; }
      if ( a.type !== "" )      { print_string += " [TYPE] "    + a.type       + " "; }
      if ( a.innerText !== "" ) { print_string += " [TEXT] "    + a.innerText  + " "; }
      // console.dir(a);
      console.log(print_string);
  });
  console.groupEnd("Data URLs | ANCHORS");

})();
