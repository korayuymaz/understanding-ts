const names: Array<string> = ["Alice", "Bob", "Charlie"]; // Array<string> is the same as string[]
// Array<string> is a generic type, which means it can be used with any type, not just strings

const promise: Promise<string> = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
