function add(numbers) {
  if (numbers === "") return 0 // should return 0 if empty string is passed!

  // const numberArray = numbers.split(",").map(num => parseInt(num, 10));
  const numberArray = numbers.split(/,|\n/).map(num => parseInt(num, 10));
  return numberArray.reduce((sum, num) => sum + num, 0);

}

console.log(add("")) // should return 0 if empty string is passed!
console.log(add("5"));  // Output: 5
console.log(add("1,5"));     // Output: 6
console.log(add("10,20,30")); // Output: 60
console.log(add("1\n2,3"));   // Output: 6
console.log(add("1,2\n3,4"));  // 10
