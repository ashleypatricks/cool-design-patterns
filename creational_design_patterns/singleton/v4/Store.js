const Logger = require('./Logger');

// Omit the getInstance() method as seen in /v2
const logger = new Logger();

class Store{
    constructor(name, inventory=[]){
        this.name = name;
        this.inventorty = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }
}

module.exports = Store;