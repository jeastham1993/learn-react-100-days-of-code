console.log('---------------------- classes -------------------')
class Human
{
    constructor(){
        this.gender = 'Male';
    }

    writeGender = () => {
        console.log(this.gender);
    }
}

// If extending a parent class super(); must be added to init the parent
class Person extends Human {
    constructor(name, gender){
        super();
        this.name = name;
        this.gender = gender;
    }

    name = ''
    writeName = () => {
        console.log(this.name);
    }
}

const myPerson = new Person('John', 'male');
myPerson.writeName();
myPerson.writeGender();

const myFemale = new Person('Jane', 'female');
myFemale.writeName();
myFemale.writeGender();