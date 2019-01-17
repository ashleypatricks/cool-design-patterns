/*
    Here we import the Logger, and make a new instance of it.

    Every time a new Store is created we log a new message of the name of the
    store and the items it holds.
*/

const Logger = require('./Logger');

const logger = new Logger();

class Store {

    constructor(name, inventory=[]){
        this.name = name;
        this.inventory = inventory;
        logger.log(`New store: ${name} has ${inventory.length} items in stock`);
    }
}

module.exports = Store;