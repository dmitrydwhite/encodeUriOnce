# encodeUriOnce
Utility for ensuring that a URI has only been encoded once.
---
## Rationale
I developed this utility while working on a pass through library that accepts various sorts of data from the client, re-shapes it, and passes it on to a server with a highly opinionated JSON schema.  For some property values, the rigid JSON schema required a correctly encoded URI; but I couldn't always be sure that the client had or hadn't already encoded their dynamic value.  I wanted to make sure it was encoded, but also be sure not to encoded it if it already had been.  I also didn't see anything quite like this already in existence on `npm`.

## To Download
```sh
$ npm install --save encodeUriOnce
```

## To Use
```js
var eu1 = require('encodeUriOnce');

var objectWithRequiredEncodedURIValues = {
  needsEncoding: eu1('https://www.encodeurionce.com?query=all wrong'),
    // >> "https://www.encodeurionce.com?query=all%20wrong"
  noEncodingNeeded: eu1('https://www.encodeurionce.com?query=all%20okay'),
    // >> "https://www.encodeurionce.com?query=all%20okay"
  somehowDoubleEncoded: eu1('https://www.encodeurionce.com?query=too%2520many%2520times')
    // >> "https://encodeurionce.com?query=too%20many%20times"
};
```

## Review the Code
The GitHub repo for this module is [here](https://github.com/dmitrydwhite/encodeUriOnce)

