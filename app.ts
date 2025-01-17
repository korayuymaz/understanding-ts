let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// unknown is more restrictive than any type
// because it forces you to check the type before you can do anything with it
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'
if (typeof userInput === "string") {
  // Type check
  userName = userInput;
}

