class Employee {
    
    constructor(name, money, employer){
        this.name = name;
        this.money = money;
        this.employer = employer;
    }

    print(){
        console.log(`Name: ${this.name} Money: ${this.money} Employer: ${this.employer}`);
    }
}

module.exports = Employee;