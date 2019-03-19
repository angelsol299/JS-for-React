const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

const unactiveJobs = jobs.filter(job => {
  return job.isActive === false;
});

console.log(unactiveJobs);

/*
const square = function(number) {
  return number * number;
};

const square = number => number--;
console.log(square(5));


const person = {
  name: "angel",
  sport() {},
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk.bind(person);
walk();

person.sport();
person.name = "";
const targetMember = "name";
person[targetMember.value] = "mario";


//var => function
//let => block
//const => block

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHello();
*/
