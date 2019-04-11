'use strict';
// USED TO SHOW ALL THE TEMPORARY VARIABLES
// SAVED IN THE CHROME DEBUGER TOOL
//
// *RIGHT CLICK ON AN OBJECT CLICK 'SAVE'
//
(() => {
  var item;

  const dump_obj = ( ob ) => {
    if (Object.keys(ob).length > 0) {
     for (item of Object.keys(ob)) {
       console.log('%c ' + item,'color:green; font-weight:bold;', ob[item]);
     }
    } else {
       console.log(ob);
    }
  };

  const log_header = (title, item) => {

    let title_string = '\n%c' + title;
    let title_style = 'color: red;';

    let item_type = typeof(item);

    let item_len;
    if (item_type == 'object' || item_type == 'array') {
      item_len = Object.keys(item).length;
    } else {
      item_len = 0;
    }

    let meta_string = '%c [' + item_type.toUpperCase() + ']';

    if (item_len > 0) {
      meta_string = meta_string + ' Length: ' + item_len;
    }
    let meta_style = 'color: grey; font-style:italic;';

    let log_string = title_string + meta_string + '\n';

    console.log(log_string, title_style, meta_style);
  };


  //  forked from 'log-globals' by Sindre Sorhus
  //  https://github.com/sindresorhus/log-globals
  //  https://jsperf.com/log-global-variable
  const get_global_vars = () => {
    let frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    const default_props = frame.contentWindow;
    document.body.removeChild(frame);

    let result = Object.create(null);
    for (var prop in window) {
      if (prop in default_props === false) {
        result[prop] = window[prop];
      }
    }
    return result;
  };

  let result = get_global_vars();

  for (item of Object.keys(result)) {

    console.log(window[item]);

    // ENSURE ITEM IS NOT UNDEFINED
    if (window[item] && typeof(window[item]) != 'undefined') {

      log_header(item, window[item]);

      if (typeof(window[item]) === 'object') {
        dump_obj(window[item]);
      } else {
        console.log(window[item]);
      }

    }
  }
})()
