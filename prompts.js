const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

class Person {
    constructor(firstname,
        lastname,
        fathername,
        date) {
        this.firstname = firstname
        this.lastname = lastname
        this.fathername = fathername
        this.date = date

    }


}
class Professor extends Person {
    constructor(firstname, lastname, fathername, date) {
        super(firstname, lastname, fathername, date)
    }
    getInfo() {

        console.dir('Профессор')
        console.dir(`Фамилия :${this.lastname}`)
        console.dir(`Имя: ${this.firstname}`)
        console.dir(`Отчество: ${this.fathername} `)
        console.dir(`Дата рождения: ${this.date}`)


    }


}
class Student extends Person {
    constructor(firstname, lastname, fathername, date) {
        super(firstname, lastname, fathername, date)
    }
    getInfo() {

        console.dir('Студент')
        console.dir(`Фамилия: ${this.lastname}`)
        console.dir(`Имя: ${this.firstname}`)
        console.dir(`Отчество: ${this.fathername} `)
        console.dir(`Дата рождения: ${this.date}`)


    }

}

rl.question('введте фамилию: ', lname => {
    rl.question('введте имя: ', fname => {
        rl.question('введите отчество: ', faname => {
            rl.question('введте дату рождения: ', data => {
                // заполнение конструктора данными
                rl.question('1: Профессор 2: Студент ', answ => {
                        switch (parseInt(answ)) {
                            case 1:
                                const professor = new Professor(fname, lname, faname, data)
                                professor.getInfo()
                                break;
                            case 2:
                                const student = new Student(fname, lname, faname, data)
                                student.getInfo()
                                break;
                            default:
                                console.log("Что-то пошло не так")

                        }
                    }

                )

            })
        })
    })
})