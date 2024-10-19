function add(number) {
  if (number === "") return 0 // should return 0 if empty string is passed!

  const numberArray = numbers.split(",").map(num => parseInt(num, 10));
  return numberArray.reduce((sum, num) => sum + num, 0);

}

console.log(add("")) // should return 0 if empty string is passed!
console.log(add("5"));  // Output: 5