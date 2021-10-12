const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3)

const number = 1;
const num2 = number;

console.log(num2)


// second person is only pointed toward person
const person = {
    name: 'Max'
};

const secondPerson = person;

person.name = 'Manu';

console.log(secondPerson)


const person2 = {
    name: 'Max'
};

const secondPerson2 = {
    ...person
};

person.name = 'Manu';
console.log(secondPerson2)

