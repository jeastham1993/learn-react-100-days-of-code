console.log('---------------------- next gen classes -------------------')
class Human
{
    gender = 'male';

    writeGender = () => console.log(this.gender);
}

// If extending a parent class super(); must be added to init the parent
class Person extends Human {
    name = ''

    writeName = () => console.log(this.name);
}

const myPerson = new Person('John', 'male');
myPerson.writeName();
myPerson.writeGender();

const myFemale = new Person('Jane', 'female');
myFemale.writeName();
myFemale.writeGender();