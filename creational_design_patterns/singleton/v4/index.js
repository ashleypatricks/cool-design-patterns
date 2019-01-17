const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

// Omit the getInstance() method as seen in /v2
var logger = new Logger();

logger.log('starting app...');

var ashley = new Shopper('ashley', 500);
var ski_shop = new Store('Steep & Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);

logger.logs.map(log => console.log(log.message));
