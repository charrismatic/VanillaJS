// USED TO SHOW ALL THE TEMPORARY VARIABLES
// SAVED IN THE CHROME DEBUGER TOOL
//
// *RIGHT CLICK ON AN OBJECT CLICK 'SAVE'
//
(() => {
  const dump_obj = ( ob ) => {
    if (Object.keys(ob).length > 0) {
     for (item of Object.keys(ob)) {
       console.log('%c ' + item,'color:green; font-weight:bold;', ob[item]);
     }
    } else {
       console.log(ob);
    }
  };

  const log_header = (temp) => {
    let title_string = '\n%c' + temp;
    let title_style = 'color: red;';

    let temp_type = typeof(window[temp]);
    let temp_len = Object.keys(window[temp]).length;

    let meta_string = '%c [' + temp_type.toUpperCase() + ']';
    if (temp_len > 1) {
      meta_string = meta_string + ' Length: ' + temp_len;
    }
    let meta_style = 'color: grey; font-style:italic;';

    let log_string = title_string + meta_string + '\n';

    console.log(log_string, title_style, meta_style);
  }

  let temp_vars = Object.keys(window).join(' ').match(/temp[0-9]+/g);

  for (temp of temp_vars) {
    log_header(temp);

    if (typeof(window[temp]) === 'object') {
      dump_obj(window[temp]);
    } else {
      console.log(window[temp]);
    }
  }
})()
