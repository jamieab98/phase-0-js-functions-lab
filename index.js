function calculateTax(amount) {
    if (amount >= 0) {
        let tax = amount * 0.1;
        console.log("The tax is: ", tax);
    } else {
        console.log("Error. Please enter a positive number");
    }
}
calculateTax(4)

function convertToUpperCase(text) {
    let txt = text.toUpperCase();
    return txt;
}
console.log(convertToUpperCase("H3y"))

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log("The larger of these two numbers: ", findMaximum(-3, -3))

function isPalindrome(word) {
    let originalArray = word.toLowerCase().split("");
    let arrayLength = originalArray.length - 1;
    if (arrayLength > 0) {
        for (let i = 0; i < arrayLength; i++) {
            let palindrome = true;
            if (originalArray[i] !== originalArray[arrayLength - i]){
                i = arrayLength;
                palindrome = false;
                return palindrome;
            } else if (i > (arrayLength / 2)) {
                i = arrayLength;
                palindrome = true;
                return palindrome;
            } else {
                return palindrome;
            }
        }
    } else {
        let palindrome = true;
        return palindrome;
    }
}
console.log(isPalindrome(""))

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    if (discountedPercentage > 100){
        return "Error. Discounted percentage cannot be more than 100. Try again";
    } else {
        let discountedPrice = originalPrice - (originalPrice * (discountedPercentage / 100));
        return discountedPrice;
    }
}
console.log(calculateDiscountedPrice(50, 100))




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };