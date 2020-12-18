var AgeLogic = require('../age/ageLogic')

class PersonGeneration extends AgeLogic{
    constructor(...args){
        super(...args)
    }

getGeneration() {
    if (this.getAge() < 20 ){
        return "Gen Z"
    } else if (this.getAge() >= 20 && this.getAge() < 30){
        return "Milenial Muda"
    } else if (this.getAge() >= 30 && this.getAge() < 40 ){
        return "Milenial Angkatan Awal"
    }else{
        return "Baby Boomer"
    }
}
}
module.exports = PersonGeneration