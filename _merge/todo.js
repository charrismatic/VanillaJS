// find events
// https://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node-when-debugging-or-from-the-javascript?rq=1


// GET NODE TO ROOT PATH FOR CLONE JS
// https://stackoverflow.com/questions/1484875/i-need-the-full-dom-node-path-of-element
// TRY

var path = [];

var el = document.getElementById('myNode');

do {
    path.unshift(el.nodeName + (el.className ? ' class="' + el.className + '"' : ''));
} while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode));

console.log(path.join(" > "));
