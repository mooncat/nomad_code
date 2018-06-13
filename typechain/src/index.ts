// console.log("hello raina");

const name = "Raina",
age = 24,
gender = "female";
// const sayHi = (name, age, gender?) => {
//     console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
// };
// const sayHi = (name:string, age:number, gender:string):void => {
//     console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
// };

const sayHi = (name:string, age:number, gender:string): string => {
    return `hello ${name}, you are ${age}, you are a ${gender}`;
};

// sayHi(name, age, gender);
console.log(sayHi("HaeLim", 222, "female"));

export {};