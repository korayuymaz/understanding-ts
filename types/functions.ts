function addNumbers(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

function printResultVoid(num: number): void {
  // void return type means no return value
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResultVoid(addNumbers(5, 12));

let combineValues: (a: number, b: number) => number; // Function type

combineValues = addNumbers;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result); // Callback function
});
