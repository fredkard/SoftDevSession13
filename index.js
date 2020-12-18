var PersonLogic = require('./domain/person/personlogic');
var personLogic = new PersonLogic('Fredy Kardian','0000092303839210','1983-03-23');
// console.log(personLogic.nama)
// console.log(personLogic.getWeekType())

var AgeLogic = require('./domain/age/ageLogic');
var ageLogic = new AgeLogic('Fredy Kardian','0000092303839210','1983-03-23');
// console.log(ageLogic.getAge())

var PersonGeneration = require('./domain/generation/generationlogic');
var personGeneration = new PersonGeneration('Fredy Kardian','0000092303839210','1983-03-23');
// console.log(personGeneration.getGeneration())

var NikValidate = require('./domain/nik/nikLogic');
var nikvalidate = new NikValidate ('Fredy Kardian','0000092303839210','1983-03-23');
console.log(nikvalidate.validate())