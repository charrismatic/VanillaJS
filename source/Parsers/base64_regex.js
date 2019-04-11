// USE REGEX TO TEST IF BASE64
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
// RE_BASE64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// ^                          # Start of input
// ([0-9a-zA-Z+/]{4})*        # Groups of 4 valid characters decode
//                            # to 24 bits of data for each group
// (                          # Either ending with:
//     ([0-9a-zA-Z+/]{2}==)   # two valid characters followed by ==
//     |                      # , or
//     ([0-9a-zA-Z+/]{3}=)    # three valid characters followed by =
// )?                         # , or nothing
// $                          # End of input
var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
