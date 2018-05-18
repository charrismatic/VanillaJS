//  GET ALL LINKS, URLS, AND IMAGES,
//  LOG GROUPS TO CONSOLE.

(function() {
  var print_string = "";
  console.group("Data URLs | IMAGES");
  [].forEach.call(document.querySelectorAll("img"), function(img) {
       print_string = "";
        if ( img.src !== "" )   { print_string += "[SRC] "    + img.src.trim()   + "";  }
        if ( img.title !== "" ) { print_string += " [TITLE] " + img.title.trim() + " "; }
        if ( img.alt  !== "")   { print_string += " [ALT] "   + img.alt.trim()   + " "; }
        // console.dir(img);
        console.log(print_string);

  });
  console.groupEnd("Data URLs | IMAGES");


  console.group("Data URLs | LINKS");
  [].forEach.call(document.querySelectorAll("link"), function(link) {
      print_string = "";
      if ( link.href !== "")   { print_string +=  "[HREF] "   + link.href.trim()  + "";  }
      if ( link.title !== "" ) { print_string += " [TITLE] "  + link.title.trim() + " "; }
      if ( link.rel !== "" )   { print_string += " [REL] "    + link.rel.trim()   + " "; }
      if ( link.type !== "" )  { print_string += " [TYPE] "   + link.type.trim()  + " "; }
      // console.dir(link);
      console.log(print_string);
  });
  console.groupEnd("Data URLs | LINK");


  console.group("Data URLs | ANCHORS");
  [].forEach.call(document.querySelectorAll("a"), function(a) {
      print_string = "";
      if ( a.href !== "")       { print_string += "[HREF] "     + a.href.trim()       + "";  }
      if ( a.title !== "" )     { print_string += " [TITLE] "   + a.title.trim()      + " "; }
      if ( a.target !== "" )    { print_string += " [TARGET] "  + a.target.trim()     + " "; }
      if ( a.rel !== "" )       { print_string += " [REL] "     + a.rel.trim()        + " "; }
      if ( a.type !== "" )      { print_string += " [TYPE] "    + a.type.trim()       + " "; }
      if ( a.innerText !== "" ) { print_string += " [TEXT] "    + a.innerText.trim()  + " "; }
      // console.dir(a);
      console.log(print_string);
  });
  console.groupEnd("Data URLs | ANCHORS");

})();
