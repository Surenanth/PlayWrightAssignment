
//String  Problem 1
let s = "   fly me   to   the moon  ";
let strsize = s.split(" ");

for (let size = strsize.length - 1; size >= 0; size--) {

    if ((strsize[size].length) > 0) {
        console.log(strsize[size] + " => " + strsize[size].length);
        break;
    }

}

//String Problem 2

let str1 = "listen";
let str2 = "silent"


isAnagram(str1, str2)
function isAnagram(str1, str2) {
    let s1 = [...str1];
    let s2 = [...str2];
    s1.sort(); s2.sort();
    let s3 = s1.join('');
    let s4 = s2.join('');
    if ((s3) == (s4)) {
        console.log("True");
    } else { console.log("False") }
}



//Array problem 1

let swap = [0,1,0,3,12];
swap.sort();
for (let swaplast = swap.length - 1; swaplast >=0; swaplast--) {
    let temp = swap[swaplast];
    if (temp == 0) {
        swap.shift();
        swap.push(0);
    }
}
console.log(swap);


//Array problem 2
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
let num3 = [];

for (let x = 0; x < nums1.length; x++) {

    for (let j = 0; j < nums2.length; j++) {

        if (nums1[x] == nums2[j]) {
            if (!num3.includes(nums1[x])) {
                num3.push(nums1[x]);
            }
        }

    }

}
console.log(num3);


//Array problem 3
let inputnums = [34, 7, 21, 89, 54, 10, 91, 67]
console.log("Minimum Element : " + Math.min(...inputnums) + "  Index : " + inputnums.indexOf(Math.min(...inputnums)));
console.log("Maximum Element : " + Math.max(...inputnums) + "  Index : " + inputnums.indexOf(Math.max(...inputnums)));

//Array problem 4

iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
resultarray = [];

for (let x = 0; x < iputArray.length; x++) {

    if (!resultarray.includes(iputArray[x])) {
        resultarray.push(iputArray[x]);
    }
}
console.log(resultarray);