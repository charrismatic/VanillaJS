// https://www.sitepoint.com/jquery-document-ready-plain-javascript/

var callback = function(){
  // Handler when the DOM is fully loaded
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
