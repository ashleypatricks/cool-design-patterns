/*
    This file will export a Singleton rather than a Logger. It will only allow us
    to create one instance of the Logger. Any time we need that instance, we can
    retrieve it through the getInstance() method.
*/

class Logger {

    constructor(){
        this.logs = [];
    }

    get count(){
        return this.logs.length;
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}

class Singleton{

    /*
        Check to see if an instance has been created. If there is no instance then
        we want to create one. It will only allow us to create one instance when we
        instantiate the class.
    */
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger();
        }
    }

    getInstance(){
        return Singleton.instance;
    }
}

// The Singleton class is now exposed, which is actually as Logger with the getInstance() method attached.
module.exports = Singleton;