const userFactory = require('./userFactory');

let person1 = userFactory('Person 1', 100);
let person2 = userFactory('Person 2', 100, 'employee', 'This and That');

person1.print();
person2.print();