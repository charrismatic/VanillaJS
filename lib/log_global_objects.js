/*
  forked from
  'log-globals' by Sindre Sorhus
  https://github.com/sindresorhus/log-globals
  MIT License
*/
(function () {
  'use strict';
  let iframe = (() => {
    var el = document.createElement('iframe');
    el.style.display = 'none';
    document.body.appendChild(el);
    var win = el.contentWindow;
    document.body.removeChild(el);
    return win;
  })();

  let result = Object.create(null);

  for (let prop in window) {
    if (!(prop in iframe)) {
      result[prop] = window[prop];
    }
  }
  // console.log(result);
  return result;
})();
