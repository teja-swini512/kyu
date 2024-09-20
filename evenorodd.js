// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if (!Number.isInteger(number)) {
     throw new TypeError("Input must be an integer.");
    }
   return number % 2 === 0 ? "Even" : "Odd";
 }                  