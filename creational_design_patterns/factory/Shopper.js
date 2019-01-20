class Shopper{
    constructor(name, money=0){
        this.name = name;
        this.money = money;
    }

    print(){
        console.log(`Name: ${this.name} Money: ${this.money}`);
    }
}

module.exports = Shopper;