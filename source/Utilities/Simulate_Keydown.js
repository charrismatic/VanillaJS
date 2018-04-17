var e = new Event("keydown");
  e.key="32";    // just enter the char you want to send 
  e.keyCode=e.key.charCodeAt(0);
  e.which=e.keyCode;
  e.altKey=false;
  e.ctrlKey=false;
  e.shiftKey=false;
  e.metaKey=false;
  e.bubbles=true;
  document.dispatchEvent(e);
