var PersonLogic = require('./domain/person/personlogic');
var personLogic = new PersonLogic('Fredy Kardian','0000092303839210','1983-03-23');
console.log('Abang '+personLogic.nama)
console.log('Lahir pada ' + personLogic.getWeekType() + ' di tanggal '+personLogic.bod);

var AgeLogic = require('./domain/age/ageLogic');
var ageLogic = new AgeLogic('Fredy Kardian','0000092303839210','1983-03-23');
console.log('Saat ini berumur '+ageLogic.getAge() + ' tahun')

var PersonGeneration = require('./domain/generation/generationlogic');
var personGeneration = new PersonGeneration('Fredy Kardian','0000092303839210','1983-03-23');
console.log('Jadi bisa digolongkan ke dalam '+personGeneration.getGeneration())

var NikValidate = require('./domain/nik/nikLogic');
var nikvalidate = new NikValidate ('Fredy Kardian','0000092303839210','1983-03-23');
console.log('Bila dibandingkan NIK nya : '+ nikvalidate.nik+ ' dan tgl lahir : '+ nikvalidate.bod)
console.log('Maka disimpulkan '+nikvalidate.validate())