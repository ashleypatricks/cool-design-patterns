// Logger automatically contains instantiated Singleton instance.
const logger = require('./Logger');

class Shopper{
    constructor(name, money=0){
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in his account.`);
    }
}

module.exports = Shopper;