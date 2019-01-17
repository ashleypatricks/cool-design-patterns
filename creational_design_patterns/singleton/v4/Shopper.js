const Logger = require('./Logger');

// Omit the getInstance() method as seen in /v2
const logger = new Logger();

class Shopper{
    constructor(name, money=0){
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in his account.`);
    }
}

module.exports = Shopper;