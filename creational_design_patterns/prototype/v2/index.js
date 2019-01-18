var scout_prototype = require('./scout_prototype');

/* 
    Now we can create the shopper based on the scout_prototype's clone() method.
    We now create an exact clone of the scout_prototype in it's current state.
    This means that Shopper1 already has a bunch of items on it's shopping list (see 
    /v1/index.js or even just /v2/scout_prototype.js), and now you can just add an 
    extra random item onto the end of that shopping list.
*/
var shopper1 = scout_prototype.clone(); // Scout is exported as an object of Shopper.
shopper1.name = 'Shopper 1';
shopper1.addItemToList('water bottle');

var shopper2 = scout_prototype.clone(); // Scout is exported as an object of Shopper.
shopper2.name = 'Shopper 2';
shopper2.addItemToList('water bottle');

console.log(`${shopper1.name}: ${shopper1.shoppingList}`);
console.log(`${shopper2.name}: ${shopper2.shoppingList}`);