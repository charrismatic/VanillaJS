var regexLib = {
  comments: {
    block: a("/\\*.*?\\*/", "gs"),
    inline:  /\/\/.*$/gm,
    shell: /#.*$/gm,\
  },
  doubleQuoted: /"([^\\"\n]|\\.)*"/g,
  singleQuoted: /'([^\\'\n]|\\.)*'/g,
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
};


expand-break-html-code-line
.replace(/(\})/g, '\n$1\n')

expand-break-js-code-line
 buffer.replace(/(\})/g, '\n$1\n')
 buffer.replace(/(\}|\;)/g, '$1\n ')

expand-break-list-to-column
 buffer.replace(/([^\,]*[\,]{1,2})/g, '$1\n')

format:zeros-before-leading
replace(/[^\d]{1}\.(\d)+/g, ' 0.$1')



format:kill-inline-styles', buffer.replace(/style=\"[^\"]+\"/g, '')

format:kill-all-anchor-links, buffer.replace(/<a[\s]+href[\s]{0,}[\=][\"][^\"]*\"/g, '<a href=""')


format:no-comment-block-style, comment = buffer.replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g, '')


# CONVERT BLOCK COMMENTS TO INLINE, buffer.replace(/^ {0,}\/\*\*+|^ {0,}\*+\*\/|^ {0,}\*/g, '///')

inline-php-comment-line, buffer.replace(/^[\s]*[\*]{1}[\s]*[\n]{1}/g, '')

# spaces between :, and things
no-double-space-between-elements, buffer.replace(/([\:\,])\s\s+\b([\d\D])/g, '$1 $2')

format:no-double-space
  buffer.replace(/[\s]{2,}([\w])/g, ' $1')  # spaces on left
  buffer.replace(/([\w])[\s]{2,}/g, '$1 ')  #spaces on right

format:open-after-close
  buffer.replace(/(?![}][\s]*[}])[}][\s]*[\n]{1,}/g, '}\n\n')

format:braces-in', ->
  buffer = atom.workspace.getActiveTextEditor().getBuffer()
  buffer.replace(/^([\s]*)([\S].*)[\{]|((?!.*[\}]).*)[\{]/g, '$1$2\n$1{')


'format:braces-out', ->
  buffer = atom.workspace.getActiveTextEditor().getBuffer()
  buffer.replace(/[\s]{0,}[\n]{1,}[\s]{0,}[{][^\S]/g, ' {\n')

format:collapse-all', ->
  buffer = atom.workspace.getActiveTextEditor().getBuffer()
  buffer.replace(/^[\s]*[^\S]/g, '')

format:squeeze-lines', ->
  buffer.replace(/^[\s]*[\n]+[\s]*[\n]*/g, '\n\n')


:pad-markdown-line-endings', ->
  buffer.replace(/^(\/\/\/+.*[^\s]{2,})$/g, '$1  ')

:trim-left', ->
  buffer.replace(/^[^\r\n\d\S][\s]*/g, '')

'format:collapse-lines', ->
buffer.replace(/[\n]+[\s]*[\n]/g, '\n')

\s+^\n
\s+[^\n]
^\n+/
line_number: ^[0-9]+\s+
//  removeExtraSpacesAfterEndOfWords: /\b[\s]{2,}/|[\w][\s]{2,}|[\s]{2,}[\w]|,
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
