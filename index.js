function calculateTax(amount) {
    let tax = amount * 0.1;
    return tax;
}
console.log("The tax on $2 is: ", calculateTax(2))

function convertToUpperCase(text) {
    let txt = text.toUpperCase();
    return txt;
}
console.log(convertToUpperCase("Hello"))

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log("The larger of these two numbers: ", findMaximum(3, 2))

function isPalindrome(word) {

}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    let discountedPrice = originalPrice - (originalPrice * (discountedPercentage / 100));
    return discountedPrice;
}
console.log(calculateDiscountedPrice(100, 20))



// This is required for the test to function properly  
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };