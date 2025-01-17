function addNumbers(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

function printResultVoid(num: number): void {
  // void return type means no return value
  console.log("Result: " + num);
}

printResultVoid(addNumbers(5, 12));
