const Logger = require('./Logger');

// Call the getInstance() method chained onto the Logger to retrieve a Singleton.
const logger = new Logger().getInstance();

class Shopper{
    constructor(name, money=0){
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in his account.`);
    }
}

module.exports = Shopper;