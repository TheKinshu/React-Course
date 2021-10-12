class Human {
    constructor(gender){
        gender = gender;
    }
    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human{
    
    name = 'Max';

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person('Male');
person.printMyName();
person.printGender()
