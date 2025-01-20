class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name} `);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("d1", "Accounting");
// const accountingCopy = { name: "Copy", describe: accounting.describe };

accounting.describe();
// accountingCopy.describe(); // Error: this is undefined if name is not defined in accountingCopy
