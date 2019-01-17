/*
    Updated version of the Singleton - no need for the extra
    getInstance() method as I have provided a short hand version
    using the 'else' clause to return the current Singleton.instance
    which should be the current one already created. The 'if' clause
    only runs if there is NO CURRENT SINGLETON INSTANCE IN MEMORY. 
    The 'else' clause runs if one already exists - in which case we just
    return it without you having to chain on another method which would have
    been getInstance() in /v2.
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
        instantiate the class. If there is an instance already in memory then that one
        will be returned instead.
    */
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger();
            return Singleton.instance; // Don't forget to return the instance
        }else{
            return Singleton.instance; // Also here!
        }
    }
}

module.exports = Singleton;