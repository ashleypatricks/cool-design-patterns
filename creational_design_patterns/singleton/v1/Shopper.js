/*
    Also uses the logger, and creates it's own instance.

    Every new Shopper that get's created get's logged out.
*/
const Logger = require('./Logger');

const logger = new Logger();

class Shopper {
    constructor(name, money=0){
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in his account.`);
    }
}

module.exports = Shopper;