const Logger = require('./Logger');

// Call the getInstance() method chained onto the Logger to retrieve a Singleton.
const logger = new Logger().getInstance();

class Store{
    constructor(name, inventory=[]){
        this.name = name;
        this.inventorty = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }
}

module.exports = Store;