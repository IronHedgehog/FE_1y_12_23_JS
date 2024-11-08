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
  #hardwork;

  constructor(name, salary, bonus, rate, overtime) {
    this.name = name;
    this.salary = salary;
    this.bonus = bonus;
    this.rate = rate;
    this.overtime = overtime;
    this.#hardwork = true;
  }
  // Приватні властивості треба використовувати тільки всередині класу
  #employeeMethod() {
    return 1 + 2;
  }
  getWage() {
    this.#employeeMethod();
    return this.salary + this.bonus + this.rate * this.overtime;
  }
}

const petro = new Employee("Petro", 30000, 10000, 100, 30);

// petro.#employeeMethod;
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

class SuperEmployee extends Employee {
  constructor(name, salary, bonus, rate, overtime, hardWork) {
    super(name, salary, bonus, rate, overtime);
    this.hardWork = hardWork;
  }
}

const Petro = new SuperEmployee("Petro", 30000, 10000, 100, 30, true);

console.log(Petro.getWage());

// const abc = "ABC".;

// console.log();

class Counter {
  #time;

  constructor(time) {
    this.#time = time;
  }

  set time(newTime) {
    return (this.#time = newTime);
  }

  get time() {
    return this.#time;
  }
}

const timer = new Counter(10000);
timer.time = 20000;

console.log(timer.time);
