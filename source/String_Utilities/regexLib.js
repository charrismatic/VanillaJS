var regexLib = {
  multiLineCComments: a("/\\*.*?\\*/", "gs"),
  singleLineCComments: /\/\/.*$/gm,
  singleLinePerlComments: /#.*$/gm,
  doubleQuotedString: /"([^\\"\n]|\\.)*"/g,
  singleQuotedString: /'([^\\'\n]|\\.)*'/g, 
  multiLineDoubleQuotedString: a('"([^\\\\"]|\\\\.)*"', "gs"),
  multiLineSingleQuotedString: a("'([^\\\\']|\\\\.)*'", "gs"),
  xmlComments: a("(&lt;|<)!--f.*?--(&gt;|>)", "gs"),
  url: /\w+:\/\/[\w-.\/?%&=:@;#]*/g,
  phpScriptTags: {
    left: /(&lt;|<)\?(?:=|php)?/g,
    right: /\?(&gt;|>)/g,
    eof: !0
  },
  aspScriptTags: {
    left: /(&lt;|<)%=?/g,
    right: /%(&gt;|>)/g
  },
  scriptScriptTags: {
    left: /(&lt;|<)\s*script.*?(&gt;|>)/gi,
    right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi
  },
  spacesAtStartOfString: /^\s*/,
//  removeExtraSpacesAfterEndOfWords: /\b[\s]{2,}/|[\w][\s]{2,}|[\s]{2,}[\w]|,
}


// REMOVE EXTRA SPACES AFTER END OF WORDS
// -- \b[\s]{2,} -- [\w][\s]{2,}|[\s]{2,}[\w]|
// buffer.replace "^[^\r\n\d\S][\s]*", ''
// buffer.replace /^\n*\s*/, '\n'
// buffer.replace /\t/g, '\s\s'
// buffer.replace "/^.\s*", ''
// buffer.replace /\s\s/g, '\s'
// buffer.replace /\n\n/g, '\n'
// buffer.replace(/\t/g, '\s\s')
// buffer.replace /\r\n\r\n/g, '\r\n'
// buffer.replace(/^\n+/g, '\n')
// buffer.replace(/[\r\n]{3,}/g, '\n\n')
// whitespace.convert-all-tabs-to-spaces
// vv-- CAN'T PARSE / INSIDE
// /[\/]{1}[\*]{1,}[\n\r\s\*]{1,}[\*]?[^/]*[\n\r\s]{1,}[\*]{1,}[\/]{1}
// vv-- CAN'T PARSE MULTIPLE / / / (URL)
// /(\/[\*]{1,}[^\/]{1,})\/ *?([^\/]{0,}[\*]{1,}\/)/
// /(\/[\*]{1,}[^\/]{1,})[\/]?([^\/]{0,}[\*]{1,}\/)/
// /\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/
// /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/q
// \{([^\{\}]|[\s])+\} <--- EVERYTHING BETWEEN THE BRACES
//
