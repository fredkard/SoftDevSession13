var PersonLogic = require('./domain/person/personlogic');
var personLogic = new PersonLogic('Dona', '0000092303830000','1982-03-20');
console.log(personLogic.nama)
console.log(personLogic.getWeekType())

var AgeLogic = require('./domain/age/ageLogic');
var ageLogic = new AgeLogic('Dona','0000092303830000','1982-03-23');
console.log(ageLogic.getAge())

var PersonGeneration = require('./domain/generation/generationlogic');
var personGeneration = new PersonGeneration('Dona','0000092303830000','1982-03-20')
console.log(personGeneration.getGeneration())

var NikValidate = require('./domain/nik/nikLogic')
var nikvalidate = new NikValidate ('Dona','0000092303830000','1982-03-20')
console.log(nikvalidate.validate())