
var selectors = {
  article: '',
  title: 'h1',
  table_of_contents: '',
  ignoreTags: '',
  references: '#post-content p a',
  list: '.wiki-custom-sidebar ul a',
};


var common_elements = {
  "headings3"   : document.querySelectorAll('article h3'),
  "links"       : document.querySelectorAll('article a'),
  "code"        : document.querySelectorAll('article code'),
  "def"         : document.querySelectorAll('article dl dd'),
}
