# PROTOTYPE
-----------

Imagine you have a group of houses that all look the same in terms of layout. They have the same size, floorplan, and are all made of the same materials. Only difference is that each house had certain customisations that made them different.

It's as though the construction company that built the houses had a pattern they could follow to make them more efficient by using the same materials and blueprints. Each house is essentially a clone or a copy of a master design.  

Sometimes we face the same problem in software development. We may spend a long time creating and setting up objects that are essentially the same. 

The intent in this section is to specify the kinds of objects to create using prototypical instance, and create new objects by copying this prototype.

## The Example Files

## Illustration

We are using a Shopper class to create two instances of Shoppers as can be seen in folder /v1. Both of these shoppers have essentially the same shopping list, so the process of setting up these shoppers requires that we duplicate the same code.

We can save time and reduce redundancy by implementing the Prototype pattern as can be seen in /v2. We create a new Prototype called 'scout_prototype' which is a new kind of Shopper. It is a Prototype of the Shopper class but it already has certain items in its shopping list that all scouts would have - the duplicated code that both shoppers have in /v1.

We move all of the repeating code (the items in the list) into the scout prototype so that when we make an instance of the scout prototype we already have a number of items in the shopping list that are helpful for scouts - therefore making a type of Shopper.

Check out /v2 to see the changes.

Adding the clone() method to the Shopper class will allow us to use the Prototype Pattern when we create new Shoppers off the Scout Prototype.