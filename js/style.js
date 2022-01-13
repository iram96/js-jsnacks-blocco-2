/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

let userNumber;
let sum = 0;

for (let i = 0; i < 5; i++){
    userNumber = parseInt(prompt('Scegli un numero'));
    sum += userNumber;
}

console.log(sum);
let i = 0;  

while (i < 5){
    userNumber = parseInt(prompt('Scegli un numero'));
    sum += userNumber;
    i++;
}
console.log(sum);

do {
    userNumber = parseInt(prompt('Scegli un numero'));
    sum += userNumber;
    i++;
    
} while (userNumber[i] > 0 && userNumber[i] < 5)

console.log(sum);
*/

/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const arrayNames = ['Mario', 'Alberto', 'Carla'];
const arraySurnames = ['Rossi', 'Bianchi', 'Neri', 'Gialli', 'Verdi']

// for (let i = 0; i < arrayNames.length; i++){
//     const randomNumber = Math.floor(Math.random() * arrayNames.length);
//     const finalName = arrayNames[randomNumber] + ' ' + arraySurnames[randomNumber];
//     console.log(finalName);
// }



let i = 0;
// while (i < arrayNames.length){
//     const randomNumber = Math.floor(Math.random() * arrayNames.length);
//     const finalName = arrayNames[randomNumber] + ' ' + arraySurnames[randomNumber];
//     i++;
//     console.log(finalName);
// }

do{
    const randomNumber = Math.floor(Math.random() * arrayNames.length);

    const finalName = arrayNames[randomNumber] + ' ' + arraySurnames[randomNumber];
    i++;
} while (i < arrayNames.length)