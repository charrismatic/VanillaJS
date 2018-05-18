
function makeStyleSheet(ruleArr) {
  sheet="";
  for(rule of ruleArr) {
    console.log(rule);
    sheet += rule.cssText + " \n";
  }
  return sheet;
}
