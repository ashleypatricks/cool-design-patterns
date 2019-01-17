/*
    We want our application classes to use this logger class instead of console.log()
    directly.

    It saves information about all of the logs that are sent to it and also logs each
    message with a timestamp.

    So once we create an instance of this object we can use the log() method to send it
    a message and it will log the timestamp and the message to the terminal, as well as
    save information about the log.
*/

class Logger{

    constructor() {
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

module.exports = Logger;