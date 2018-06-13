// console.log("hello raina");
// interface Human {
//     name:string;
//     age:number;
//     gender:string;
// }
// dist -> js ㅍㅏ일내에서는 interface내부를 볼 수 없다. 하지만, class, public을 쓰는 경우에는 모두 오픈된다.

class Human{
    public name: string;
    // private relationship: boolean;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const Sujin = new Human('Jung SU jin', 222, 'Female');

const sayHi = (person:Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(Sujin));

export {};