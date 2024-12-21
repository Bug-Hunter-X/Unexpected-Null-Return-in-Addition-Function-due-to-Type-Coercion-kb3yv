function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values as needed
  } else if (a === 0 || b === 0) {
    return a + b; //Handle 0 values appropriately
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(0,2)); //2
console.log(foo(2,0)); //2