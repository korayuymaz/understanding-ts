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

function generateErrror(message: string, code: number): never {
  // never is a type that is never returned
  throw { message: message, errorCode: code };
}

// const result = generateErrror("An error occurred!", 500); // This will crash the script
generateErrror("An error occurred!", 500);
