/*
    Clone method added to this class in order to provide the Prototype pattern.

    Adding the clone() method to the Shopper class will allow us to use the Prototype
    Pattern when we create new Shoppers off the Scout Prototype.
*/

class Shopper{

    constructor(name='unamed person'){
        this._name = name;
        this._shoppingList = [];
    }

    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get shoppingList(){
        return this._shoppingList.join(', ');
    }

    addItemToList(item){
        this._shoppingList.push(item);
    }

    // Prototype Pattern enabled here
    clone(){
        /*
            1) Copy the object's structure.

            In JS the structure of this object contains all of the above methods including
            the constructor. We need to copy all of these prototype methods by grabbing
            the current prototype for the current instance.
        */
        let proto = Object.getPrototypeOf(this);

       /*
            2) Now, create a new object based off of the prototype that was just saved above.
       */
        let cloned = Object.create(proto);
        
      /*
            3) Grab the data of the current instance.

            The above gave us the methods of the current object but we also want to copy
            the current values (data). So we want to get the contents of the current 
            shopping list and also the current name of the shopper.
      */

      cloned._name = this._name;
      cloned._shoppingList = [...this._shoppingList];

      // Then return the cloned object
      return cloned;

    }
}

module.exports = Shopper;