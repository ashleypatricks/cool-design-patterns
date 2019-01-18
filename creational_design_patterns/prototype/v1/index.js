var Shopper = require('./Shopper');

var shopper1 = new Shopper('Shopper 1');
shopper1.addItemToList('camping knife');
shopper1.addItemToList('tent');
shopper1.addItemToList('backpack');
shopper1.addItemToList('map');
shopper1.addItemToList('slingshot');

var shopper2 = new Shopper('Shopper 2');
shopper2.addItemToList('camping knife');
shopper2.addItemToList('tent');
shopper2.addItemToList('backpack');
shopper2.addItemToList('map');
shopper2.addItemToList('slingshot');

console.log(`${shopper1.name}: ${shopper1.shoppingList}`);
console.log(`${shopper2.name}: ${shopper2.shoppingList}`);