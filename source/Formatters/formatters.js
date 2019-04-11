var formatters = {
  document_header: `\n\n${location.href}\n\n# ${document.title}\n\n---------------------------\n`;
  links_inline:  `[${title}](${url})`,
  links_list: ` - [${title}](${url})`,
  links_json: `{\"title\": \"${title}\", \"url\": \"${url}\"}`,
}
