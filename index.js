const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorialsarr.map(element=>{
     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}
titleCased();
///////////////////////////////////////
///////////////////////////////////////
//Using for...of in Place of .map()
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = [];

for (const student of skiSchool) {
  rollCall.push(student + " the skier");
}
////////////////////////////////////////
function studentRollCall(student) {
  return student + " the skier";
}
// map() With a Function Declaration
// map() With a Function Declaration
const skiSchools = ["aki", "guadalupe", "lei", "aalam"];
const rollCalls = skiSchool.map(studentRollCall);
studentRollCall();



// map() With a Function Expression
const skiSkul = ["aki", "guadalupe", "lei", "aalam"];
const studentRollCalls = ((student)=>{
  return student + " the sker";
});
// map() With an Arrow Function
// When the parameter list is only one element, we can drop () !
const skiSchoolss = ["aki", "guadalupe", "lei", "aalam"];
const rollCallss = skiSchool.map((student) => student + " the skier");
//=> rollCall = ["aki the skier", "guadalupe the skier", "lei the skier", "aalam the skier"];



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Demonstrate map() With Complex Data Structures
const robots = [
  {
    name: "Johnny 5", modes: 5, isActivated: false
  },
  {
    name: "C3PO", modes: 3, isActivated: false
  },
  {
    name: "Sonny", modes: 2.5, isActivated: false
  },
  {
    name: "Baymax", modes: 1.5, isActivated: false
  },
];
const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);







