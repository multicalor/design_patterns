//  Одиночка
let instance;

class Counter {
    constructor(){
        if (typeof Counter.instance === 'object'){
            return Counter.instance;
        } instance = this;

        instance.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return instance.count;
    }

    increaseCount() {
        return instance.count++
    }
};

myCount1 = new Counter();
myCount2 = new Counter();

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()

console.log(myCount1.getCount())
console.log(myCount2.getCount())
console.log(myCount2 === myCount1)
