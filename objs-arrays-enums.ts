enum Role {
  ADMIN = 5,
  READ_ONLY = 6,
  AUTHOR = 7,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role[1] = 10;  // !!! ERROR !!!
// person.role = [0, "admin", "user"]; // !!! ERROR !!!
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
