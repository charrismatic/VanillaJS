/**************************************************
 *  SOLUTIONS HIGHLIGHT NUMBERS COUNTUP FUNCTIONS
 *  @REQUIRES CountUp.js
 *  @LINK https://github.com/inorganik/CountUp.js
 *
 *  NOTE: CountUp.js is currently included on home.phtml template file
 *        you will need to add it to any additional pages wanting to use this feature
 *
 * @EXAMPLE
 * var options = {
 *   useEasing : true,  // YOU CAN USE ANY JQUERY EASING PROPERTIES
 *   useGrouping : true,
 *   separator : ',',
 *   decimal : '.',
 * };
 *
 *  PARAMS:
 *  target = id of html element, input, svg text element
 *  startVal = the value you want to begin at
 *  endVal = the value you want to arrive at
 *  decimals = (optional) number of decimal places in number, default 0
 *  duration = (optional) duration in seconds, default 2
 *  options = (optional, see demo) formatting/easing options object
 *
 *  var demo = new CountUp("myTargetElement", 0, 3826, 0, 2.5, options);
 *  demo.start();
 *
 *  optional callback:
 *  numAnim.start(someMethodToCallOnComplete)
 *  // or an anonymous function
 *  numAnim.start(function() {
 *      // do something
 *  })
 *
 *  Other methods:
 *  numAnim.pauseResume();
 *  numAnim.reset();
 *
 *  var someValue = 1337;
 *  numAnim.update(someValue);
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/



/**
 *  [MAIN COUNTER FUNCTION
 *  SETS OPTIONS AND PARAMETERS
 *  AS WELL AS CONTSTRUCTS EVENT LISTENER TO START COUNTING
 *  AFTER SECTION IS REVEALED]
 *  @method initCounter
 *  @param  {[type]} target [description]
 *  @param  {[type]} conf [description]
 *  @return {[type]} [description]
 */
function initCounter(target, conf){
  var options = {
    decimal: '.'      ,
    separator: ','    ,
    useEasing: true   ,
    useGrouping: true ,
  };


  // SHOULD NOT DIRECTLY CALL THIS FUNCTION BUT IT WON'T BREAK IF YOU DO
  if (typeof(target) === 'string') {
    target = document.getElementById(target);
  }


  // USE HTML ATTRIBUTES OR DEFAULT VALUES
  if (!conf.start){ conf.start = 0; }

  if (!conf.end){ conf.end = 1000; }

  if (!conf.duration){ conf.duration = 6 * Math.random() *1.5; }

  var counter = new CountUp(target, conf.start, conf.end, 0, conf.duration, options);

  var handleScroll = function(event) {

    if (isScrolledIntoView (target)) {
      counter.start();

      window.removeEventListener('scroll', handleScroll, false );
      return false;
    }
  }

  window.addEventListener('scroll', handleScroll, this, false);
}



/**
 *  TAKES A DOM ELEMENT AND PARSES HTML DATA PARAMATERS
 *  TO DETERMINE COUNTER OPTIONS
 *  @method counterGetOptions
 *  @param  {[Object]} counterTargetr [ID OR OBJECT]
 *  @return {[array]} [Start Number, End Number, Special Formatting]
 */
function counterGetOptions(counterTargetr) {

  var countConf = {
    'start': counterTargetr.getAttribute('data-counter-start'),
    'end': counterTargetr.getAttribute('data-counter-end'),
    'duration' : counterTargetr.getAttribute('data-counter-duration')
  }

  return countConf;
}



/**
 *  CALL DIRECTLY FROM HTML WHERE YOUR COUNTER IS
 *  THIS WILL FIND THE COUNTERS ON THE PAGE, PARSE THE INLINE HTML OPTIONS
 *  AND REGISTER THE ACTIVATION TRIGGER FOR THE COUNTER
 *  @method registerCounters
 *  @param  {[type]} options [Target ID, DOM String ]
 *  @return {[type]} [description]
 */
function registerCounters( selector ) {

  // SELECT BY: SELECTOR STRING, ROOT ELEMENT, OR INDIVIDUAL NODE.
  if ( selector ) {
    var counters = document.querySelectorAll( selector );
  } else {
    var counters = document.querySelectorAll( '.count-it' );
  }

  if (counters) {
    for ( var counter of counters ){
      var countConf = counterGetOptions(counter);
      initCounter(counter, countConf);
    }
  }
}
