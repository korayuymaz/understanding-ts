type Combinable = number | string; // type alias for union type
type ConversionDescriptor = "as-number" | "as-text"; // type alias for literal type

function combine(
  input1: Combinable, // type alias
  input2: Combinable, // type alias
  resultConversion: ConversionDescriptor // type alias
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
