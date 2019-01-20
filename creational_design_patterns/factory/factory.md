# FACTORY
---------

In the real world, factories create products. 

A vehicle factory creates vehicles, a phone factory creates phones and a chemical factory creates chemicals.

Each of these factories create many variations of their products. A vehicle factory may create cars, trucks, SUV's, all different types of vehicles.

In JavaScript we may have different objects that we want to instantiate. We can improve our code by encapsulating all of the constructors into a single module and creating a function that will create the objects for us. This design pattern is called the Factory Method.

It's intent is to define an interface for creating an object, but let subclasses decide which class to instantiate. A factory method lets a class defer instantiation to subclasses.


## Illustration

The problem that may arise is that in any given file, you may have to create a number of objects. If you get into a position where you have to create loads of objects, it can quickly become cumbersome and overload your file. It can become quite complex and your file may start to look REALLY busy. It is not scalable. One method can encapsulate everything that you need. 

In this userFactory.js file, we can see that the Employee and Shopper objects can be made just by sending in various arguments to the same userFactory method. Depending on the arguments that get sent in to the method either a Shopper or Employee will get sent back.

This is VERY SCALABLE as you can just decide on which extra arguments to send in to the factory method in order to return any new object types you make think of in the future.

