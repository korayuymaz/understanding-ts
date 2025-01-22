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
