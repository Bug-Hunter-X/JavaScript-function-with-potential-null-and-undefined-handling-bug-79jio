function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values by returning a default value
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); //Output: 0
console.log(foo(1, undefined)); //Output: 0
console.log(foo("a", 2)); //Output: NaN