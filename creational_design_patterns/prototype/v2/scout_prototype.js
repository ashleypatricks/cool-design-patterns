/*
    This new class will be our scout_prototype class of the Shopper type. We can remove
    the name argument which gets passed in to the Shopper constructor because we will use
    scout object to make multiple instances. We can assign a name for each scout by setting
    the name property through the set method rather than the constructor.
*/

var Shopper = require('./Shopper');

var scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');
scout.addItemToList('slingshot');

module.exports = scout;