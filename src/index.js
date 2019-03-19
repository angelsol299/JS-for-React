const person = {
  name: "angel",
  sport() {},
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk;
walk();

/*
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
