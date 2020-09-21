let repl = require('repl')
let readline = require('readline')


class Number {
    constructor(number) {
        this.number = number
    }

}
class Positive extends Number {
    constructor(number) {
        super(number)
    }

    sqrt() {
        let sqrt = Math.pow(this.number, 2)
        console.dir(sqrt)
    }
}
class Negative extends Number {
    constructor(number) {
        super(number)
    }
    mult() {
            let mul = this.number * 2
            console.log(mul)
        }
        // нследоване от клсса нумбер ?

}






let reply = repl.start()

reply.defineCommand(`num`,
    (num) => {

        if (parseInt(num) < 0) {
            let negative = new Negative(num)
            negative.mult()
        } else if (parseInt(num) > 0) {
            let positive = new Positive(num);
            positive.sqrt()
        } else {
            console.log(` Что - то пошло не так`)
                //break;
                // наследуется свойсво numer
                // спарсл в инт потому что боюсь ю
        }
    })