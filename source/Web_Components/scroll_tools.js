/**
*  A SET OF TOOLS FOR TRACKING SCROLL EVENTS IN window
*  @AUTHOR MATT HARRIS @ SFP
*  7/18/2017, 2:30:22 PM
*
*  PIECES POLITELY BORROWED FROM
*  http://xtianmiller.com/notes/animating-elements-when-they-appear-in-viewport/
*
*/


// FEATURE DETECTION
// MAKE SRUE requestAnimationFrame and classList EXIST
// We can polyfill needed
// if (window.requestAnimationFrame && document.documentElement.classList) {
//   document.documentElement.classList.add('enhanced');
//   // Do stuff
// }
//
//
// // VARIABLE FOR REQUESTANIMATIONFRAME
// var _requestAnimationFrame = window.requestAnimationFrame ||
// window.webkitRequestAnimationFrame ||
// window.mozRequestAnimationFrame ||
// window.oRequestAnimationFrame ||
// window.msRequestAnimationFrame;
//


// GET VIEWPORT DIMENSIONS
var getViewportSize = function() {
  return {
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight
  };
};


// GET THE CURRENT SCROLL POSITION
var getCurrentScroll = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};



// GET THE ELEMENT’S DIMENSIONS AND POSITION
var getElemInfo = function(elem) {
  var offsetTop = 0;
  var offsetLeft = 0;
  var offsetHeight = elem.offsetHeight;
  var offsetWidth = elem.offsetWidth;

  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent) !== null);

  return {
    top: offsetTop,
    left: offsetLeft,
    height: offsetHeight,
    width: offsetWidth
  };
};



// CHECK VISIBILITY OF THE ELEMENT IN THE VIEWPORT
var checkVisibility = function(elem) {
  var viewportSize = getViewportSize();
  var currentScroll = getCurrentScroll();
  var elemInfo = getElemInfo(elem);
  var spaceOffset = 0.2;
  var elemHeight = elemInfo.height;
  var elemWidth = elemInfo.width;
  var elemTop = elemInfo.top;
  var elemLeft = elemInfo.left;
  var elemBottom = elemTop + elemHeight;
  var elemRight = elemLeft + elemWidth;

  var checkBoundaries = function() {
    // Defining the element boundaries and extra space offset
    var top = elemTop + elemHeight * spaceOffset;
    var left = elemLeft + elemWidth * spaceOffset;
    var bottom = elemBottom - elemHeight * spaceOffset;
    var right = elemRight - elemWidth * spaceOffset;

    // Defining the window boundaries and window offset
    var wTop = currentScroll.y + 0;
    var wLeft = currentScroll.x + 0;
    var wBottom = currentScroll.y - 0 + viewportSize.height;
    var wRight = currentScroll.x - 0 + viewportSize.width;

    // Check if the element is within boundary
    return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
  };

  return checkBoundaries();
};



//  Create a variable selector for all revealing elements
// var revealer = document.querySelectorAll('.revealer');

// Create a loop to add a custom class
var toggleElement = function() {
  for (var i = 0; i < revealer.length; i++) {
    if (checkVisibility(revealer[i])) {
      revealer[i].classList.add('revealed');
    } else {
      revealer[i].classList.remove('revealed');
    }
  }
};



// GET IS ELEMENT IN VIEW
function isScrolledIntoView(target) {
   var elemTop = target.getBoundingClientRect().top;
   var elemBottom = target.getBoundingClientRect().bottom;

   var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
   return isVisible;
}


// Throttling events with requestAnimationFrame
function throttleExamples() {
  var scrollHandler = throttle(function() {
    _requestAnimationFrame(toggleElement);
  }, 300);

  var resizeHandler = throttle(function() {
    _requestAnimationFrame(toggleElement);
  }, 300);

  if (window.addEventListener) {
    addEventListener('scroll', scrollHandler, false);
    addEventListener('resize', resizeHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scrollHandler);
    window.attachEvent('onresize', resizeHandler);
  } else {
    window.onscroll = scrollHandler;
    window.onresize = resizeHandler;
  }
}


// PLACEHOLDER FILE
// ALL JS FILES IN THIS DIRECTORY WILL CONCATONATED BELOW
// FEEL FREE TO ADD ADDITIONAL FUNCTIONS IN THE SPACE BELOW


function scrollToTop() {
  jQuery('html, body').animate({
    scrollTop: 0
  }, 1000);
}


function glideTo (selector){
  var node = document.querySelector(selector);
  // console.log(node);
  jQuery('html, body').animate({
    scrollTop: node.offsetTop - (window.window.innerHeight / 3)
  }, 1000);
}
