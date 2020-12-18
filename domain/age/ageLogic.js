var PersonLogic = require('../person/personlogic')

class AgeLogic extends PersonLogic{
    constructor(...args){
        super(...args)
    }
getAge() {
    var birhtOfDate = Date.parse(this.bod)
    var now = Date.now()
    var diff = now - birhtOfDate
    var diffDate = new Date(diff)
    return Math.abs(diffDate.getUTCFullYear() - 1970)
}
}

module.exports = AgeLogic;