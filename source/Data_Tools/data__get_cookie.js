(function () {

  var target = '_octo';

  function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  let msg = getCookie(target);
  if (msg) {
    console.log(msg);
  } else {
    console.log('Cookie named ' + target + ' not found');
  }
})();
