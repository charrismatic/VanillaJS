// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_rewrite_the_DOMs_atob()_and_btoa()_using_JavaScript's_TypedArrays_and_UTF-8

// # The "Unicode Problem"
// Since DOMStrings are 16-bit-encoded strings, in most browsers calling window.btoa on a Unicode string will cause a Character Out Of Range exception if a character exceeds the range of a 8-bit byte (0x00~0xFF). There are two possible methods to solve this problem:

// the first one is to escape the whole string (with UTF-8, see encodeURIComponent) and then encode it;
// the second one is to convert the UTF-16 DOMString to an UTF-8 array of characters and then encode it.
// Here are the two possible methods.

// ## Solution #1 – escaping the string before encoding it
function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

//  ```
// b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
// b64EncodeUnicode('\n'); // "Cg=="
// ```
//To decode the Base64-encoded value back into a String:

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

// ```
// b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
// b64DecodeUnicode('Cg=='); // "\n"
// ```
// *Unibabel implements common conversions using this strategy.
// ### Solution #2 – rewrite the DOMs atob() and btoa() using JavaScript's TypedArrays and UTF-8
// Use a TextEncoder polyfill such as TextEncoding (also includes legacy windows, mac, and ISO encodings), TextEncoderLite, combined with a Buffer and a Base64 implementation such as base64-js.
// When a native TextEncoder implementation is not available, the most light-weight solution would be to use TextEncoderLite with base64-js. Use the browser implementation when you can.
// The following function implements such a strategy. It assumes base64-js imported as <script type="text/javascript" src="base64js.min.js"/>. Note that TextEncoderLite only works with UTF-8.

function Base64Encode(str, encoding = 'utf-8') {
    var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);        
    return base64js.fromByteArray(bytes);
}

function Base64Decode(str, encoding = 'utf-8') {
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}






// ### SOLUTION 3
// Here is the the current recommendation, direct from MDN, with some additional TypeScript compatibility via @MA-Maddin:

// Encoding UTF8 ⇢ base64
// Implement a regular expression in place of the deprecated unescape function

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    }))
}

// ```
// b64EncodeUnicode('✓ à la mode') // "4pyTIMOgIGxhIG1vZGU="
// b64EncodeUnicode('\n') // "Cg=="
// ```

// Decoding base64 ⇢ UTF8
// The MDN article didn't originally have an example for decoding, but one has now been added

function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}

// ```
// b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU=') // "✓ à la mode"
// b64DecodeUnicode('Cg==') // "\n"
// ```

// -------------------------------------------------
