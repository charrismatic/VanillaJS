((e) => {
  // just enter the char you want to send
  e.key='32';
  e.keyCode=e.key.charCodeAt(0);
  e.which=e.keyCode;
  e.altKey=false;
  e.ctrlKey=false;
  e.shiftKey=false;
  e.metaKey=false;
  e.bubbles=true;
  return document.dispatchEvent(e);
})(new Event('keydown'));
