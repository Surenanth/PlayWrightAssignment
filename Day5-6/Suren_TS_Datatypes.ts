/*
 * Typescript
 * Create variables with different data types and print them in console
    1) browserVersion - 117 (immutable)
    2) browserNames- declare a type datatype with variables bName as Edge and updated version as 115      
    3) isHeadless - true (use implicit type reference)
    4) releaseYear - 1998 (use explicit type reference)
    5) browserLogo - use 'any' data type and use two values with different data types
 
*/

const browserVersion: number = 117;
console.log(`value of browserVersion => ${browserVersion}`);
type browserNames={
    bname:string,
    version:number
}
let browseName:browserNames ={bname:'chrome',version:213};
console.log(`value of browseName => ${browseName.bname} ${browseName.version}`);

let isHeadless =null;
console.log(`value of isHeadless => ${isHeadless}`);
let releaseYear:number =1998;

console.log(`value of releaseYear => ${releaseYear}`);

let browserLogo:any;
browserLogo='chrome';
browserLogo=123;



console.log(`value of browserLogo => ${browserLogo}`);