/*
    Main entry point for the app.

    This class creates a 3rd instance of the logger.

    The last line prints out how many logs are currently in the logger and then the line
    below that runs a map on the loggers array to print out each index's log object.message
    property.
*/

const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

const logger = new Logger();

logger.log('Starting app...');

const ashley = new Shopper('ashley', 500);
const ski_shop = new Store('Steep & Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit hat',
        qty: 20,
        price: 5
    }
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);

logger.logs.map((log) => {
    console.log(`${log.message}`);
})