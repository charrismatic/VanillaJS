var timestamp = (() => {
  var DATE = new Date();
  var DAY  = DATE.getDate();
  var MON  = DATE.getMonth() + 1;
  var YEAR = DATE.getFullYear();
  var HR   = DATE.getHours();
  var MIN  = DATE.getMinutes();
  var SEC  = DATE.getSeconds();
  return [YEAR, MON, DAY, HR, MIN, SEC].join('_');
})();
