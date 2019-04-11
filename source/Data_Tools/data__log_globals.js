/*
  forked from
  'log-globals' by Sindre Sorhus
  https://github.com/sindresorhus/log-globals
  https://jsperf.com/log-global-variables
*/
(function(){
  'use strict';
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
  console.log(result);
})();
