var PersonLogic = require('../person/personlogic');

class NikValidate extends PersonLogic{
    constructor(...args){
        super(...args)
    }

    validate(){
        var nik_string = new String(this.nik)
        if (this.nik.length == 16) {
            return 'NIK Length OK'
        }else{
            return 'NIK Lenght must be 16'
        }
    }
}
module.exports = NikValidate