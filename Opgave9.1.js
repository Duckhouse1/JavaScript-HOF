//Lav et array med en række person objekter. Hver person skal have et navn, en alder og et mobilnummer.
//Løs nedenstående vha. arrays højere ordens metoder.
const personArray = [
    {name:"Dennis",alder: 25,nr: "29876032"},
    {name: "clemen",alder: 24, nr: "27859302"},
    {name: "rasmus",alder: 18, nr: "26848832"}]
//Find person med et bestemt mobilnummer.
findPerson = personArray.find(person => person.nr === "27859302")
console.log(`finder person med ${findPerson.nr} som nummer`);
console.log(findPerson);
//Find den mindste alder.
console.log("finder mindste alderen");
mindsteAlder = personArray.reduce(((personMindsteAlder,person) => personMindsteAlder.alder < person.alder ? personMindsteAlder: person),personArray[0]);
console.log(mindsteAlder);
//Modificer arrayet med personer, så personerne nu får et fortløbende id.
personArray.forEach((person,index) => {
    person.id = index+1
})
console.log(personArray);
//Generer en tekststreng, der indeholder personernes navne – kommasepareret og i sorteret rækkefølge.
let NavnArray =  personArray.map(person => person.name).sort((person1,person2) => person1.localeCompare(person2)).toString()
console.log(NavnArray);
//Generer et array med navn og mobilnummer på de personer, der er yngre end 30.
let yngreEnd30 = personArray.forEach(person => {
        personArray.reduce(((maksAlder,person) => person.alder < maksAlder ? person.alder + person.nr : maksAlder), 30);
})
console.log(yngreEnd30);