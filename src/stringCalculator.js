export default function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const numberArray = numbers
    .split(delimiter)
    .map(num => parseInt(num, 10))
    .filter(num => !isNaN(num)); // Ignore non-numeric values

  const negatives = numberArray.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}

console.log(add("")) // should return 0 if empty string is passed!
console.log(add("5"));  // Output: 5
console.log(add("1,5"));     // Output: 6
console.log(add("10,20,30")); // Output: 60
console.log(add("1\n2,3"));   // Output: 6
console.log(add("1,2\n3,4"));  // 10
console.log(add("//;\n1;2"));       // Output: 3
try {
    console.log(add("1,-2,3"));
} catch (e) {
    console.error(e.message);
}
try {
    console.log(add("//;\n1;-2;3;-4")); // SHould throws: Negative numbers not allowed: -2, -4
} catch (e) {
    console.error(e.message);
}
