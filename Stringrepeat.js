// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)        
function repeatStr (n, s) {
    if (n <= 0 || !Number.isInteger(n)) {
    return "";
  }
  return Array.from({length: n}, () => s).join("");
}                                                                                   