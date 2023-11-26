/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result

*/

var score = 32;

calculateGrade(score);

function calculateGrade(score) {

    switch (true) {
        case score > 90:
            console.log("Grade A+");
            break;
        case score > 70:
            console.log("Grade A");
            break;
        case score > 75:
            console.log("Grade B+");
            break;
        case score > 70:
            console.log("Grade B");
            break;
        case score > 60:
            console.log("Grade c");
            break;
        case score > 50:
            console.log("Grade E");
            break;
        default:
            console.log("No Grade");
            break;
    }

}

/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/

let number = 5;
checkNumberType(number);

function checkNumberType(number) {
    if (number>0) {
        console.log("Actual number is > 0 =>" + number);
    } else if (number<0){
        console.log("Actual number is < 0 =>" + number);
    }else{
        console.log("Actual number is 0 =>" + number);
    }
    
}

/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/
var num = 5;
checkOddOrEven(num);
function checkOddOrEven(num) {
    if ((num/2)==0) {
        console.log("given number is even =>" + num);
        
    }else{
        console.log("given number is odd =>" + num);
    }
    
}