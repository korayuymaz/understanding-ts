type Admin = {
  name: string;
  privileges: string[];
};

type GeneralEmployee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & GeneralEmployee;

const e1 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Admin | GeneralEmployee;

function printEmployeeInformation(emp: UnknownEmployee) { 
  console.log("Name: " + emp.name);
  if ("privileges" in emp) { // type guard
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) { // type guard
    console.log("Start Date: " + emp.startDate);
  }
}
