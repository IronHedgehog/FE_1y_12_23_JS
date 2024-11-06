const salary = 30000;
const bonus = 10000;
const rate = 100;
const overtime = 30;

function getWage(salary, bonus, rate, overtime) {
  return salary + bonus + rate * overtime;
}

getWage(salary, bonus, rate, overtime);

const artemFaust = {
  salary: 30000,
  bonus: 10000,
  rate: 100,
  overtime: 30,

  getWage() {
    return this.salary + this.bonus + this.rate * this.overtime;
  },
};

console.log(artemFaust.getWage());

class Employee {
  constructor(name, salary, bonus, rate, overtime) {
    this.name = name;
    this.salary = salary;
    this.bonus = bonus;
    this.rate = rate;
    this.overtime = overtime;
  }

  getWage() {
    return this.salary + this.bonus + this.rate * this.overtime;
  }
}

const petro = new Employee("Petro", 30000, 10000, 100, 30);

const employees = [
  { name: "qwe", salary: 30000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 40000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 50000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 60000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 70000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 80000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 90000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 100000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 11000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 3110000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 30000, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 300100, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 300010, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 300001, bonus: 10000, rate: 100, overtime: 30 },
  { name: "qwe", salary: 300001, bonus: 10000, rate: 100, overtime: 30 },
];

const work = employees.map(
  (employee) =>
    new Employee(
      employee.name,
      employee.salary,
      employee.bonus,
      employee.rate,
      employee.overtime
    )
);

const elem1 = work[12];

console.log(elem1.getWage());
