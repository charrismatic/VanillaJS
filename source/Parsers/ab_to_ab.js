// In these APIs, for mnemonic purposes, 
//   the "b" can be considered to stand for "binary", 
//   and the "a" for "ASCII". 
// In practice, though, for primarily historical reasons, 
// both the input and output of these functions are Unicode strings.
// 
// atob
// The atob() method must run the following steps to parse the string passed in the method’s first argument:
//  Let input be the string being parsed.
//  Let position be a pointer into input, initially pointing at the start of the string.
// 1 Remove all space characters from input.
// 2 If the length of input divides by 4 leaving no remainder, 
//   then: if 
//           input ends with one or two U+003D EQUALS SIGN (=) characters, 
//           then remove them from input.
// 3 If the length of input divides by 4 leaving a remainder of 1, 
//   throw an InvalidCharacterError exception and abort these steps.
// 4 If input contains a character that is not in the following list of characters and character ranges, 
//   throw an InvalidCharacterError exception and abort these steps: 
//   a–zA–Z0–9   Alphanumeric ASCII characters
//   +   U+002B PLUS SIGN (+)
//   /   U+002F SOLIDUS (/)
// Let output be a string, initially empty.
// Let buffer be a buffer that can have bits appended to it, initially empty.
// While position does not point past the end of input, run these substeps:


// default:  0–9, A–Z, a–z
// ext:  !#$%&()*+-;<=>?@^_`{|}~
// json_control: "',./:[\] 
// xml_control: "',./:[\] 

function print_item(item){console.log(typeof(item),item,tryAtob(item))}; 
function tryAtob(item){ try{ return atob(item.toString())}catch(err){ return "" }} 
function tryCleanAtob(item){return item.split('-').join('+').split('_').join('/') }

var string = "";

string.split("--").forEach(function(item){
    print_item(item+"="); 
    item.split("-").forEach(function(subitem){
      print_item(subitem)
      subitem.split("_").forEach(function(subsubitem){
       print_item(subsubitem)
       })
    })
})
