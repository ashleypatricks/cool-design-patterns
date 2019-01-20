let Employee = require('./Employee');
let Shopper = require('./Shopper');

/*
    We use the arguments to decide which user object to return.
    If a user is of type employee then we will return a new employee with the money, name and employer
    that was passed to the method. If not - then we return a Shopper with the money and name that was passed
    to the method.
*/

let userFactory = (name, money=0, type, employer) => {
    if(type === 'employee'){
        return new Employee(name, money, employer);
    }else{
        return new Shopper(name, money);
    }
}

module.exports = userFactory;