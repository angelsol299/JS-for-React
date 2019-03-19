import { Teacher } from "./teacher";

const teacher = new Teacher("Angel", "MSc");
teacher.teach();
/*
const first = { name: "angel" };
const second = { job: "Dev" };

const combined = { ...first, ...second, location: "Australia" };
console.log(combined);


const address = {
    street: '',
    city: '',
    country: ''
};
const street = address.street;
const city = address.city;
const country = address.country;

const { street, city, country} = address;



 const colors = ["red", "green", "blue"];

const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk();

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
