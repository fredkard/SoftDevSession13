var PersonLogic = require('../person/personlogic');

class NikValidate extends PersonLogic{
    constructor(...args){
        super(...args)
    }

    validate(){
      
        if (this.nik.length == 16) {

            var bodOfBod = String(this.bod).substring(8,10)+String(this.bod).substring(5,7)+String(this.bod).substring(2,4)
            var bodOfNik = this.nik.substring(6,12)
            if (bodOfBod === bodOfNik){
                return "NIK dan Tanggal Lahir Cocok"
            } else {
                return "NIK dan Tanggal lahir TIDAK Cocok"
            }
            
        }else{
            return 'mas '+ this.nama + ' harus cek lagi NIK nya, karena tidak 16 digit'
        }
    }
}
module.exports = NikValidate