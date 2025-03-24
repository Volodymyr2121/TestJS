//1

let user = {
  name: "Іван",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log( name );
console.log( age );
console.log(isAdmin);

//2

let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

function topSalary(salaries) {

  let maxSalary = 0;
  let nameMax;

  for (const [namme, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      nameMax = namme;
    }
  }
  
return nameMax
};

console.log(topSalary(salaries))

