/*
    An easier way to implement Singletons in Node.js is to just export the instance from
    the Node.js module.
*/

class Logger{
    constructor(){
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}

/*
    The idea here is that when we run this file it will run once, create the new
    instance of the Logger and save it in the cache. That means that Node.js will
    automatically handle exporting the same instance of the Logger to every module 
    that wishes to consume it.
*/
module.exports = new Logger();