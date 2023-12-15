/*
 * Typescript
 * Create variables with different data types and print them in console
    1) browserVersion - 117 (immutable)
    2) browserNames- declare a type datatype with variables bName as Edge and updated version as 115
    3) isHeadless - true (use implicit type reference)
    4) releaseYear - 1998 (use explicit type reference)
    5) browserLogo - use 'any' data type and use two values with different data types
 
*/
var browserVersion = 117;
console.log("value of browserVersion => ".concat(browserVersion));
var browseName = { bname: 'chrome', version: 213 };
console.log("value of browseName => ".concat(browseName.bname, " ").concat(browseName.version));
var isHeadless = null;
console.log("value of isHeadless => ".concat(isHeadless));
var releaseYear = 1998;
console.log("value of releaseYear => ".concat(releaseYear));
var browserLogo;
browserLogo = 'chrome';
browserLogo = 123;
console.log("value of browserLogo => ".concat(browserLogo));
