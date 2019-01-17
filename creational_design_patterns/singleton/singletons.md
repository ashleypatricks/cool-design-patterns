# Singletons
------------

Sometimes you need to ensure that you have ONE and only ONE instance of an object. And this is where the Singleton pattern can be useful.

It represents a single instance of an object, only one can be created now matter how many times the object is instantiated. If there is already an instance the Singleton won't creat a new one.

# The Example Files

All folders can be run using the index.js file which is the main entry point for the app.

The files consist of a Store, Shopper, Logger and index. The index makes an instance of the Shopper, Store, and Logger. All files use the Logger to print out information. Very simple example that shows the need for a Singleton.

# Illustration 

The following files demonstrates a typical problem when you have multiple classes accessing one class which is not a Singleton. All classes use the Logger class, but in the /v1 folder ONLY the index.js messages get recorded - it's because we have 3 SEPERATE instances of the logger, so only the 3rd instance's data is printed out. We are only looking at the instance
that was created within our main app - index.js. We are not looking at the instances that were created in our Store.js and Shopper.js files as we only looking at the CURRENT instance that is inside index.js.

This can be validated by seeing the amount of logs in total at the end of the app. You will see that only 2 get recorded.

>> v1/Logger.js
>> v1/Store.js
>> v1/Shopper.js
>> v1/index.js

This kind of problem can be fixed using a Singleton. We see this problem fixed in the /v2 folder. I could add a Singleton class anywhere within the file structure but it is added within the Logger.js file just for brevity. The Singleton class will ensure that only one instance of the logger is 
returned by using a Singleton to control instantiation above 1 instance. We then export the Singleton class from the Logger.js file. The Singleton is essenially pointing to one instance of the Logger class.

This is validated by seeing the amount of logs in total at the end of the app.
You will see that all 4 get recorded.

>> v2/Logger.js
>> v2/Store.js
>> v2/Shopper.js
>> v2/index.js

Now all three of the classes will be using the same instance of the Logger, and hence we will see an output from all classes via the index.js file - as the single instance of the Logger will save all logs from all class files rather than having 3 seperate instances being created and only the current instance reporting on information.

# Another Way To Create A Singleton In Node.js

An easier way to implement Singletons in Node.js is to basically just export a new instance of the class in question via the module.exports. Then, when you require in the file to a variable, the variable will already hold the new instance.

The idea here is that when we run this file it will run once, create the new
instance of the Logger and save it in the cache. That means that Node.js will
automatically handle exporting the same instance of the Logger to every module 
that wishes to consume it.

>> v3/Logger.js
>> v3/Store.js
>> v3/Shopper.js
>> v3/index.js
